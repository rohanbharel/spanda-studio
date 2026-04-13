import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { brand, dimension, contact } = await req.json();

    if (!contact?.email || !brand?.brandName || !dimension) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const FROM = process.env.RESEND_FROM ?? "SPANDA. <hello@spanda.studio>";

    await resend.batch.send([
    {
      from: FROM,
      to: "hello@spanda.studio",
      replyTo: contact.email,
      subject: `New Analysis Request — ${contact.firstName} · ${contact.company} · ${dimension.name}`,
      text: `
NEW BRAND DIMENSION ANALYSIS REQUEST
Submitted via spanda.studio/score
${"—".repeat(40)}

CONTACT
Name        ${contact.firstName}
Email       ${contact.email}
Company     ${contact.company}
City        ${contact.city}

DIMENSION SELECTED
${dimension.name} — ${dimension.question}

${"—".repeat(40)}

BRAND
Name        ${brand.brandName}
Website     ${brand.website}

What do they do, and for whom?
${brand.description}

Three competitors they actually think about:
${brand.competitors}

The one thing only their brand can honestly claim:
${brand.uniqueClaim}

${"—".repeat(40)}
Reply directly to this email to respond.
`.trim(),
    },

    // Auto-reply to submitter
    {
      from: FROM,
      to: contact.email,
      subject: "Your Brand Dimension Analysis is being prepared.",
      text: `
By tomorrow morning something considered
will be in your inbox.

SPANDA.
spanda.studio
`.trim(),
    },
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Score form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
