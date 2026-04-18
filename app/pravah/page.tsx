import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PRAVAH — Creative | A SPANDA. Company",
  description:
    "PRAVAH expresses what SPANDA extracts. Brand campaigns, content, and creative built on the Brand OS. One brand. Completely itself. Every time.",
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
    <main className="bg-ink min-h-screen px-6 py-24">
      <div className="max-w-[680px] mx-auto">

        {/* Wordmark */}
        <Image
          src="/logos/pravah-dark.png"
          alt="PRAVAH"
          width={6000}
          height={884}
          style={{ width: "189px", height: "auto", display: "block", marginBottom: "48px" }}
          priority
        />

        {/* Label */}
        <p className="font-epilogue font-light text-[13px] uppercase tracking-widest text-stone"
          style={{ marginBottom: "64px" }}>
          Creative
        </p>

        {/* Story */}
        <div className="space-y-8 font-epilogue font-light text-[18px] text-parchment leading-[1.85]">
          <p>Friday. 9pm.</p>
          <p>
            T-minus ten days to launch. The agency promised the campaign by
            end of day.
          </p>
          <p>Their email lands.</p>
          <p>You open it.</p>
          <p>Silence.</p>
          <p>Not because it&rsquo;s wrong.</p>
          <p>Because it could be anyone&rsquo;s.</p>
          <p>PRAVAH doesn&rsquo;t campaign.</p>
          <p>It expresses.</p>
          <p>
            Every word. Every visual. Every sound — an extension of the same
            truth that was extracted. Not interpreted. Not adapted. Not diluted.
          </p>
          <p>
            The brand, moving in the world, as itself. Completely.
          </p>
          <p>Look at the wordmark.</p>
          <p>
            A line runs beneath the letters. It begins at the base of R. Between
            R and A — a Saffron dot. Then the line continues, unbroken, to the
            end of H.
          </p>
          <p>
            That dot is the moment strategy becomes expression.
          </p>
          <p>
            The line is the brand in the world.
            <br />
            Every day. Without deviation.
          </p>
        </div>

        {/* Contact section */}
        <div style={{ paddingTop: "64px" }}>
          <hr className="border-0 border-t border-dust w-full" style={{ marginBottom: "48px" }} />

          <p className="font-caveat text-[36px] text-parchment">
            Interested in working together?
          </p>

          <p className="font-epilogue font-light text-[16px] text-stone" style={{ marginTop: "16px" }}>
            PRAVAH works with brands that have completed the SPANDA extraction.
            If you&rsquo;re starting from scratch — begin with SPANDA.
          </p>

          <Link
            href="https://spanda.studio"
            className="font-epilogue font-medium text-[16px] text-saffron block hover:opacity-80 transition-opacity"
            style={{ marginTop: "8px" }}
          >
            Start with SPANDA. →
          </Link>

          <p className="font-epilogue font-light text-[14px] text-stone" style={{ marginTop: "24px" }}>
            Already have a Brand OS? Get in touch directly.
          </p>

          <p className="font-epilogue font-light text-[14px] text-stone" style={{ marginTop: "8px" }}>
            hello@spanda.studio
          </p>
        </div>

      </div>

      {/* Footer — flipped */}
      <footer className="max-w-[680px] mx-auto mt-24 pt-12 border-t border-dust">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">

          {/* PRAVAH — left */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <Image
              src="/logos/pravah-dark.png"
              alt="PRAVAH"
              width={6000}
              height={884}
              style={{ width: "189px", height: "auto", display: "block" }}
            />
            <p className="font-epilogue font-light text-[13px] text-stone mt-2">
              Creative
            </p>
          </div>

          {/* Vertical rule — desktop only */}
          <div className="hidden md:block w-px bg-dust self-stretch mx-8" />

          {/* SPANDA — right */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <Image
              src="/logos/spanda-dark.png"
              alt="SPANDA."
              width={6000}
              height={400}
              style={{ width: "200px", height: "auto", display: "block" }}
            />
            <p className="font-epilogue font-light text-[13px] text-stone mt-2">
              Brand Strategy &amp; Identity
            </p>
            <Link
              href="https://spanda.studio"
              className="font-epilogue font-light text-[13px] text-stone hover:text-parchment transition-colors mt-1"
            >
              spanda.studio →
            </Link>
          </div>

        </div>

        {/* Copyright */}
        <p className="font-epilogue font-light text-[12px] text-stone text-center mt-12">
          &copy; 2026 PRAVAH. A SPANDA. company.
        </p>
      </footer>
    </main>
  );
}
