import { NextRequest, NextResponse } from "next/server";
import {
  verifyCode,
  createSessionToken,
  SESSION_COOKIE_NAME,
  getSessionCookieOptions,
} from "@/lib/deck-gate";

/**
 * POST /api/deck/gate/verify
 * Verify a magic-link code and set a session cookie.
 */
export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();
    if (!code) {
      return NextResponse.json(
        { valid: false, error: "Missing code" },
        { status: 400 }
      );
    }

    const email = verifyCode(code);
    if (!email) {
      return NextResponse.json(
        { valid: false, error: "Invalid or expired link" },
        { status: 401 }
      );
    }

    const sessionToken = createSessionToken(email);

    const response = NextResponse.json({
      valid: true,
      viewerEmail: email,
      sessionToken,
    });

    response.cookies.set(
      SESSION_COOKIE_NAME,
      sessionToken,
      getSessionCookieOptions()
    );

    return response;
  } catch (err) {
    console.error("Deck verify error:", err);
    return NextResponse.json(
      { valid: false, error: "Internal error" },
      { status: 500 }
    );
  }
}
