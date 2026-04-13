import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM ?? "SPANDA. <hello@spanda.studio>";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, company, city, question } =
      await req.json();

    if (!firstName || !email || !company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.batch.send([
      // Notification to SPANDA.
      {
        from: FROM,
        to: "hello@spanda.studio",
        replyTo: email,
        subject: `New Audit Request — ${company}`,
        text: `
NEW BRAND STRENGTH AUDIT REQUEST
Submitted via spanda.studio/audit
${"—".repeat(40)}

NAME        ${firstName} ${lastName}
COMPANY     ${company}
EMAIL       ${email}
PHONE       ${phone}
CITY        ${city}

QUESTION
${question}

${"—".repeat(40)}
Reply directly to this email to respond.
`.trim(),
      },

      // Auto-reply to submitter
      {
        from: FROM,
        to: email,
        subject: "Most founders never ask this question.",
        text: `
Most brands aren't built.
They're uncovered.

You've taken the first honest step toward
finding what was always yours.

You'll hear from us within 24 hours.

SPANDA.
spanda.studio
`.trim(),
      },
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Audit form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
