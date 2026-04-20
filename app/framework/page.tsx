import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "The Extraction Framework™",
  description:
    "The Extraction Framework™ — a proprietary brand methodology built on three phases: Excavate, Distil, Express. SPANDA. Brand Strategy & Identity.",
  alternates: { canonical: "https://spanda.studio/framework" },
  openGraph: {
    title: "The Extraction Framework™ | SPANDA.",
    description:
      "The Extraction Framework™ — a proprietary brand methodology built on three phases: Excavate, Distil, Express. SPANDA. Brand Strategy & Identity.",
    url: "https://spanda.studio/framework",
    type: "website",
  },
};

const gateBlock = (
  <div className="py-6 text-center">
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: "#C97820",
        display: "block",
        margin: "0 auto",
        marginBottom: "8px",
      }}
    />
    <div
      style={{
        width: "60px",
        height: "1px",
        background: "#C97820",
        display: "block",
        margin: "0 auto",
      }}
    />
    <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone mt-4">
      Before We Proceed
    </p>
    <p className="font-epilogue font-light text-[15px] text-stone max-w-[480px] mx-auto mt-2 leading-relaxed">
      The conviction must be genuine.
      <br />
      The differentiation must be singular.
      <br />
      Only then does the next phase begin.
    </p>
  </div>
);

export default function FrameworkPage() {
  return (
    <>
      <NavBar theme="dark" />

      {/* Hero */}
      <section className="bg-parchment pt-32 pb-12 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <h1 className="font-caveat text-[38px] md:text-[60px] text-ink leading-tight">
            The Extraction Framework™
          </h1>
          <p className="font-fraunces italic text-[18px] md:text-[20px] text-stone mt-4">
            Three phases. One question underneath all of it.
          </p>
          <p className="font-epilogue font-light text-[16px] md:text-[18px] text-stone mt-8 leading-relaxed">
            Most branding starts with a blank canvas. We start with the
            conviction that everything the brand needs to be is already present
            — in the founder&rsquo;s language, decisions, contradictions, and
            certainties. The Framework doesn&rsquo;t create. It extracts.
          </p>
        </div>
      </section>

      {/* Three phases */}
      <section className="bg-parchment pb-20 md:pb-32 px-6">
        <div className="max-w-[720px] mx-auto space-y-0">

          {/* Phase 01 — Excavate */}
          <div className="bg-linen border border-dust px-8 py-8">
            <p className="font-epilogue font-semibold text-[13px] uppercase tracking-widest text-stone">
              Phase 01
            </p>
            <h2 className="font-caveat text-[36px] text-ink mt-2">
              Excavate
            </h2>
            <p className="font-epilogue font-light text-[16px] text-stone mt-4 leading-relaxed">
              We go beneath the surface. Category mapping. Competitive audit.
              The uncomfortable questions most brand conversations avoid. We are
              looking for what is true — not what sounds good.
            </p>
          </div>

          {/* Gate 1 */}
          {gateBlock}

          {/* Phase 02 — Distil */}
          <div className="bg-linen border border-dust px-8 py-8">
            <p className="font-epilogue font-semibold text-[13px] uppercase tracking-widest text-stone">
              Phase 02
            </p>
            <h2 className="font-caveat text-[36px] text-ink mt-2">
              Distil
            </h2>
            <p className="font-epilogue font-light text-[16px] text-stone mt-4 leading-relaxed">
              We find the signal in the noise. What&rsquo;s original, what&rsquo;s
              borrowed, what&rsquo;s performance mistaken for personality. The
              Only You Test runs here. If another brand could say it, we remove it.
            </p>
          </div>

          {/* Gate 2 */}
          {gateBlock}

          {/* Phase 03 — Express */}
          <div className="bg-linen border border-dust px-8 py-8">
            <p className="font-epilogue font-semibold text-[13px] uppercase tracking-widest text-stone">
              Phase 03
            </p>
            <h2 className="font-caveat text-[36px] text-ink mt-2">
              Express
            </h2>
            <p className="font-epilogue font-light text-[16px] text-stone mt-4 leading-relaxed">
              We give the truth a form. Visual language. Verbal identity. The
              Brand OS — not a style guide, not a brand book. The
              founder&rsquo;s conviction made transmittable for the first time.
              A new team member reads it and makes decisions the founder never
              anticipated — correctly.
            </p>
          </div>

        </div>
      </section>

      {/* The Only You Test */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
            The Standard
          </p>
          <h2 className="font-caveat text-[40px] md:text-[48px] text-parchment leading-tight mt-6">
            If another brand could say it —{" "}
            <br className="hidden md:block" />
            we remove it.
          </h2>
          <hr
            className="border-0 mx-auto mt-8"
            style={{
              width: "48px",
              height: "1px",
              backgroundColor: "#C97820",
            }}
          />
          <p className="font-epilogue font-light text-[15px] text-stone mt-8 max-w-[520px] mx-auto leading-relaxed">
            Every claim. Every design decision.
            <br />
            Every line of copy.
            <br />
            The test runs until what remains could only be this brand.
          </p>
        </div>
      </section>

      {/* The Output */}
      <section className="bg-parchment py-20 md:py-32 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-caveat text-[40px] text-ink leading-tight">
            The Brand OS.
          </h2>
          <p className="font-epilogue font-light text-[17px] text-stone mt-6 leading-relaxed">
            Not a style guide. Not a brand book. An operating system for every
            brand decision you will make for the next decade — strategy,
            identity, voice, and positioning in one coherent document that
            travels with the brand wherever it goes.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-linen py-20 md:py-28 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-caveat text-[36px] text-ink leading-tight">
            Ready to run the framework on your brand?
          </h2>
          <p className="font-epilogue font-light text-[16px] text-stone mt-4 leading-relaxed">
            The Audit is where it begins.
            <br />
            ₹35,000. 48 hours. A complete diagnosis across 12 dimensions —
            with a debrief that tells you exactly what The Extraction will fix.
          </p>
          <Link
            href="/audit"
            className="font-epilogue font-medium text-[16px] text-saffron mt-6 block hover:opacity-80 transition-opacity"
          >
            Begin the Audit →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
