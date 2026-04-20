import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "PRAVAH — Creative | A SPANDA. Company" },
  description:
    "PRAVAH expresses what SPANDA extracts. Brand campaigns, content, and creative built on the Brand OS. One brand. Completely itself. Every time.",
  keywords: [
    "AI creative agency India",
    "brand campaign agency Delhi",
    "AI brand campaigns India",
    "creative agency for founders",
    "brand content agency India",
    "AI marketing agency Delhi",
  ],
  alternates: { canonical: "https://pravah.agency" },
  openGraph: {
    title: "PRAVAH — Creative | A SPANDA. Company",
    description:
      "PRAVAH expresses what SPANDA extracts. Brand campaigns, content, and creative built on the Brand OS. One brand. Completely itself. Every time.",
    url: "https://pravah.agency",
    siteName: "PRAVAH",
    type: "website",
  },
};

export default function PravahPage() {
  return (
    <main>

      {/* Hero — Deep Navy, full viewport height, centred */}
      <section className="bg-ink min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <Image
          src="/logos/pravah-dark.png"
          alt="PRAVAH"
          width={6000}
          height={884}
          style={{ width: "189px", height: "auto", display: "block", margin: "0 auto" }}
          priority
        />
        <p
          className="font-epilogue font-light text-[13px] text-stone uppercase tracking-widest text-center"
          style={{ marginTop: "12px" }}
        >
          Creative
        </p>
        <h1
          className="font-caveat text-[48px] text-parchment text-center"
          style={{ marginTop: "48px" }}
        >
          Brand campaigns. Content. Creative.
        </h1>
        <p
          className="font-epilogue font-light text-[18px] text-stone text-center max-w-[480px] mx-auto"
          style={{ marginTop: "16px" }}
        >
          Built on the Brand OS.
          <br />
          Every output unmistakably the brand.
        </p>
        <hr
          className="border-0"
          style={{
            width: "60px",
            height: "1px",
            background: "#D8D1C4",
            opacity: 0.3,
            marginTop: "48px",
            display: "block",
          }}
        />
      </section>

      {/* Second scroll — Parchment, What We Do */}
      <section className="bg-parchment py-20 md:py-32 px-6">
        <div className="max-w-[900px] mx-auto">
          <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone text-center">
            What We Do
          </p>
          <h2 className="font-caveat text-[44px] text-ink text-center mt-4">
            Creative that is completely the brand.
          </h2>
          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <div className="bg-linen border border-dust px-6 py-6" style={{ borderRadius: "8px" }}>
              <h2 className="font-caveat text-[28px] text-ink">Campaign Creation</h2>
              <p className="font-epilogue font-light text-[14px] text-stone mt-2 leading-relaxed">
                Briefs that begin with the Brand OS.
                Every campaign unmistakably the brand.
                Nothing generic. Nothing borrowed.
              </p>
            </div>

            <div className="bg-linen border border-dust px-6 py-6" style={{ borderRadius: "8px" }}>
              <h2 className="font-caveat text-[28px] text-ink">Content Generation</h2>
              <p className="font-epilogue font-light text-[14px] text-stone mt-2 leading-relaxed">
                Every output reviewed by brand experts before it reaches you.
                Not automated. Not assumed. Checked.
              </p>
            </div>

            <div className="bg-linen border border-dust px-6 py-6" style={{ borderRadius: "8px" }}>
              <h2 className="font-caveat text-[28px] text-ink">Brand Consistency</h2>
              <p className="font-epilogue font-light text-[14px] text-stone mt-2 leading-relaxed">
                Every touchpoint measured against the Brand OS.
                Nothing leaves the room until it passes the standard.
              </p>
            </div>

          </div>

          {/* Row 2 — 2 cards centred */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:w-2/3 md:mx-auto">

            <div className="bg-linen border border-dust px-6 py-6" style={{ borderRadius: "8px" }}>
              <h2 className="font-caveat text-[28px] text-ink">Creative Excellence</h2>
              <p className="font-epilogue font-light text-[14px] text-stone mt-2 leading-relaxed">
                Work that stands out in the category.
                Distinctive. Memorable.
                Entirely the brand — never the trend.
              </p>
            </div>

            <div className="bg-linen border border-dust px-6 py-6" style={{ borderRadius: "8px" }}>
              <h2 className="font-caveat text-[28px] text-ink">Measurable Impact</h2>
              <p className="font-epilogue font-light text-[14px] text-stone mt-2 leading-relaxed">
                Creative built to perform.
                Brand equity that compounds.
                Every output accountable to results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Third scroll — Deep Navy */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-[560px] mx-auto text-center">
          <h2 className="font-caveat text-[40px] text-parchment text-center">
            Built for brands that know
            <br />what they are.
          </h2>
          <p
            className="font-epilogue font-light text-[16px] text-stone text-center"
            style={{ marginTop: "16px" }}
          >
            PRAVAH works with brands that have completed the SPANDA extraction.
            The Brand OS is the brief.
            Without it we cannot guarantee what we produce.
          </p>
          <p
            className="font-epilogue font-light text-[14px] text-stone text-center"
            style={{ marginTop: "32px" }}
          >
            If you&rsquo;re starting from scratch —
          </p>
          <Link
            href="https://spanda.studio"
            className="font-epilogue font-medium text-[16px] text-saffron block hover:opacity-80 transition-opacity text-center"
            style={{ marginTop: "8px" }}
          >
            Begin with SPANDA. →
          </Link>
        </div>
      </section>

      {/* Contact — Parchment */}
      <section
        className="bg-parchment py-16 px-6"
        style={{ borderTop: "1px solid rgba(216,209,196,0.3)" }}
      >
        <div className="max-w-[480px] mx-auto text-center">
          <h2 className="font-caveat text-[36px] text-ink text-center">
            Already have a Brand OS?
          </h2>
          <p
            className="font-epilogue font-light text-[16px] text-stone text-center"
            style={{ marginTop: "16px" }}
          >
            Get in touch directly.
          </p>
          <p
            className="font-epilogue font-medium text-[16px] text-ink text-center"
            style={{ marginTop: "8px" }}
          >
            hello@pravah.agency
          </p>
        </div>
      </section>

      {/* Footer — Ink */}
      <footer className="bg-ink px-6 pt-8">
        <div className="max-w-[1100px] mx-auto">

          {/* Desktop — explicit 4-row × 2-col grid for pixel-perfect row alignment */}
          <div
            className="hidden md:grid w-full"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto auto auto auto",
              rowGap: "8px",
              alignItems: "start",
            }}
          >
            {/* Row 1 — Logos */}
            <Image
              src="/logos/spanda-dark.png"
              alt="SPANDA."
              width={6000}
              height={400}
              style={{ width: "200px", height: "auto", justifySelf: "start" }}
            />
            <Image
              src="/logos/pravah-dark.png"
              alt="PRAVAH"
              width={6000}
              height={884}
              style={{ width: "189px", height: "auto", justifySelf: "end" }}
            />
            {/* Row 2 */}
            <p className="font-epilogue font-light text-[13px] text-stone">
              Brand Strategy &amp; Identity
            </p>
            <p className="font-epilogue font-light text-[13px] text-stone text-right">
              Creative
            </p>
            {/* Row 3 */}
            <Link
              href="https://spanda.studio"
              className="font-epilogue font-light text-[13px] text-stone hover:text-parchment transition-colors"
            >
              spanda.studio →
            </Link>
            <p className="font-epilogue font-light text-[13px] text-stone text-right">
              pravah.agency →
            </p>
            {/* Row 4 */}
            <p className="font-epilogue font-light text-[12px] text-stone">
              New Delhi, India.
            </p>
            <p className="font-epilogue font-light text-[12px] text-stone text-right">
              New Delhi, India.
            </p>
          </div>

          {/* Mobile — single column, PRAVAH first, SPANDA second */}
          <div className="md:hidden flex flex-col items-center text-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/logos/pravah-dark.png"
                alt="PRAVAH"
                width={6000}
                height={884}
                style={{ width: "189px", height: "auto" }}
              />
              <p className="font-epilogue font-light text-[13px] text-stone">Creative</p>
              <p className="font-epilogue font-light text-[13px] text-stone">pravah.agency →</p>
              <p className="font-epilogue font-light text-[12px] text-stone">New Delhi, India.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/logos/spanda-dark.png"
                alt="SPANDA."
                width={6000}
                height={400}
                style={{ width: "200px", height: "auto" }}
              />
              <p className="font-epilogue font-light text-[13px] text-stone">Brand Strategy &amp; Identity</p>
              <Link
                href="https://spanda.studio"
                className="font-epilogue font-light text-[13px] text-stone hover:text-parchment transition-colors"
              >
                spanda.studio →
              </Link>
              <p className="font-epilogue font-light text-[12px] text-stone">New Delhi, India.</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center" style={{ paddingTop: "16px", paddingBottom: "6px" }}>
            <p className="font-epilogue font-light text-[12px] text-stone">
              &copy; 2026 PRAVAH. A SPANDA. company.
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}
