import { NextRequest, NextResponse } from "next/server";
import { createVerificationCode } from "@/lib/deck-gate";
import { sendDeckAccessEmail } from "@/lib/deck-email";

/**
 * POST /api/deck/gate
 * Accept an email, generate a verification code, and send a magic link.
 */

const recentEmails = new Map<string, number>();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email?.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Simple rate limit: 1 email per 60 seconds per address
    const lastSent = recentEmails.get(normalizedEmail) ?? 0;
    if (Date.now() - lastSent < 60_000) {
      return NextResponse.json({ status: "rate_limited" }, { status: 429 });
    }

    const { code } = createVerificationCode(normalizedEmail);

    await sendDeckAccessEmail({
      to: normalizedEmail,
      verificationCode: code,
    });

    recentEmails.set(normalizedEmail, Date.now());

    // Cleanup old entries periodically
    if (recentEmails.size > 1000) {
      const cutoff = Date.now() - 120_000;
      for (const [key, time] of recentEmails) {
        if (time < cutoff) recentEmails.delete(key);
      }
    }

    return NextResponse.json({ status: "email_sent", email: normalizedEmail });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Deck gate error:", message);
    return NextResponse.json(
      { error: "Internal error", detail: message },
      { status: 500 }
    );
  }
}
