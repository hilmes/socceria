/**
 * Send deck access verification email via Resend.
 */
export async function sendDeckAccessEmail({
  to,
  verificationCode,
}: {
  to: string;
  verificationCode: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://socceria.nyc";
  const url = `${base}/deck?verify=${encodeURIComponent(verificationCode)}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Socceria <deck@socceria.nyc>",
      to,
      subject: "Socceria — your investor deck is ready",
      html: `<div style="background:#E0DBD4;padding:48px 24px;font-family:Helvetica,Arial,sans-serif;text-align:center;">
        <!-- Logo -->
        <div style="display:inline-block;margin:0 auto 32px;">
          <img src="${base}/socceria-logo.svg" height="72" style="display:block;" alt="Socceria">
        </div>
        <!-- Divider -->
        <div style="width:48px;height:3px;background:#C75B3B;margin:0 auto 32px;"></div>
        <!-- Heading -->
        <p style="font-size:28px;font-weight:700;color:#2C2824;margin:0 0 12px;letter-spacing:0.02em;">Your deck is ready.</p>
        <!-- Subtext -->
        <p style="font-size:15px;color:#6B6560;margin:0 0 32px;line-height:1.7;">
          You've been invited to view the Socceria investor presentation.
        </p>
        <!-- CTA -->
        <a href="${url}" style="display:inline-block;background:#C75B3B;color:#fff;padding:16px 44px;text-decoration:none;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;font-size:13px;">View Deck &rarr;</a>
        <!-- Footer -->
        <p style="margin-top:44px;font-size:11px;color:#9B9490;letter-spacing:0.06em;line-height:1.8;">
          SOCCERIA &middot; 46 NORMAN AVE &middot; GREENPOINT BROOKLYN<br>
          Confidential &mdash; for authorized recipients only.
        </p>
      </div>`,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "unknown");
    throw new Error(`Resend error ${res.status}: ${body}`);
  }
}
