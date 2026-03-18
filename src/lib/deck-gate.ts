import crypto from "crypto";

/**
 * Lightweight magic-link gate for /deck — no database required.
 *
 * Flow:
 * 1. Visitor enters email at the gate
 * 2. Server generates a signed verification code and emails it via Resend
 * 3. Visitor clicks the link → code is verified → session cookie is set
 * 4. Cookie is an HMAC-signed token containing the email + expiry
 *
 * Environment variables:
 *   DECK_GATE_SECRET  — HMAC signing secret (required)
 *   DECK_ADMIN_KEY    — admin key for generating direct links (optional)
 *   RESEND_API_KEY    — Resend API key for sending emails (required)
 */

const VERIFICATION_TTL_MS = 15 * 60 * 1000; // 15 minutes
const SESSION_TTL_MS = 180 * 24 * 60 * 60 * 1000; // 180 days

function getSecret(): string {
  const secret = process.env.DECK_GATE_SECRET;
  if (!secret) throw new Error("DECK_GATE_SECRET is not set");
  return secret;
}

/** Sign a payload with HMAC-SHA256 */
function sign(payload: string): string {
  return crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("hex");
}

// ── Verification Codes ──────────────────────────────────────────────────────

/**
 * Generate a verification code for an email address.
 * Returns the code (64-char hex string) that can be sent in a magic link.
 * The code itself is self-verifying via HMAC — no database needed.
 *
 * Format: `${randomNonce}.${expiresAt}.${email}`
 * The code is: `${nonce}${signature}` (nonce + HMAC of the full payload)
 */
export function createVerificationCode(email: string): {
  code: string;
  expiresAt: number;
} {
  const normalizedEmail = email.toLowerCase().trim();
  const expiresAt = Date.now() + VERIFICATION_TTL_MS;
  const nonce = crypto.randomBytes(16).toString("hex"); // 32 chars
  const payload = `${nonce}.${expiresAt}.${normalizedEmail}`;
  const signature = sign(payload).slice(0, 32); // 32 chars
  // Code = nonce(32) + signature(32) = 64 chars
  const code = `${nonce}${signature}`;

  // Store the metadata alongside the code in a URL-safe base64 envelope
  // so we can verify without a database
  const envelope = Buffer.from(
    JSON.stringify({ n: nonce, e: expiresAt, m: normalizedEmail })
  ).toString("base64url");

  return { code: `${code}.${envelope}`, expiresAt };
}

/**
 * Verify a verification code. Returns the email if valid, null if invalid/expired.
 */
export function verifyCode(fullCode: string): string | null {
  try {
    const [codePart, envelope] = fullCode.split(".");
    if (!codePart || !envelope) return null;

    const { n: nonce, e: expiresAt, m: email } = JSON.parse(
      Buffer.from(envelope, "base64url").toString()
    );

    // Check expiry
    if (Date.now() > expiresAt) return null;

    // Reconstruct and verify signature
    const payload = `${nonce}.${expiresAt}.${email}`;
    const expectedSig = sign(payload).slice(0, 32);
    const expectedCode = `${nonce}${expectedSig}`;

    if (!crypto.timingSafeEqual(Buffer.from(codePart), Buffer.from(expectedCode))) {
      return null;
    }

    return email;
  } catch {
    return null;
  }
}

// ── Session Tokens (cookies) ────────────────────────────────────────────────

/**
 * Create a session token for a verified email.
 * Format: base64url JSON with HMAC signature.
 */
export function createSessionToken(email: string): string {
  const normalizedEmail = email.toLowerCase().trim();
  const expiresAt = Date.now() + SESSION_TTL_MS;
  const payload = JSON.stringify({ email: normalizedEmail, exp: expiresAt });
  const sig = sign(payload).slice(0, 32);
  const token = Buffer.from(payload).toString("base64url");
  return `${token}.${sig}`;
}

/**
 * Verify a session token. Returns the email if valid, null if invalid/expired.
 */
export function verifySessionToken(token: string): string | null {
  try {
    const [payloadB64, sig] = token.split(".");
    if (!payloadB64 || !sig) return null;

    const payload = Buffer.from(payloadB64, "base64url").toString();
    const expectedSig = sign(payload).slice(0, 32);

    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expectedSig))) {
      return null;
    }

    const { email, exp } = JSON.parse(payload);
    if (Date.now() > exp) return null;

    return email;
  } catch {
    return null;
  }
}

// ── Cookie helpers ──────────────────────────────────────────────────────────

export const SESSION_COOKIE_NAME = "deck_session";

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000), // seconds
  };
}
