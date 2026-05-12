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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
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
        text: `Something brought you here.

Not a crisis. Not a campaign deadline.
A quieter feeling — that what you're putting
into the world isn't quite what you know
this brand to be.

The Brand Strength Audit begins with a conversation.
The right questions surface what no brief can reach.

We'll call within 24 hours. To listen.

Seven days later, we sit together with what the framework found.
Not a presentation. A reckoning.

This is the first step toward finding it.

SPANDA.
spanda.studio`,
      },
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Audit form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
