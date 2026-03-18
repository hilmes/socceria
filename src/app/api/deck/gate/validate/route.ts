import { NextRequest, NextResponse } from "next/server";
import {
  verifySessionToken,
  SESSION_COOKIE_NAME,
} from "@/lib/deck-gate";

/**
 * GET /api/deck/gate/validate
 * Check if the current session cookie is valid.
 */
export async function GET(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.json({ valid: false });
  }

  const email = verifySessionToken(token);
  if (!email) {
    return NextResponse.json({ valid: false });
  }

  return NextResponse.json({ valid: true, email });
}
