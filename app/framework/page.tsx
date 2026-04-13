import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "The Extraction Framework™",
  description:
    "A proprietary brand strategy framework with 9 layers and 3 phases, built on one principle: the brand already exists. Our work is extraction, not construction.",
  alternates: { canonical: "https://spanda.studio/framework" },
  openGraph: {
    title: "The Extraction Framework™ | SPANDA.",
    description:
      "A proprietary brand strategy framework with 9 layers and 3 phases, built on one principle: the brand already exists. Our work is extraction, not construction.",
    url: "https://spanda.studio/framework",
    type: "website",
  },
};

const phases = [
  {
    number: "Phase 01",
    name: "Excavate",
    body: "We go beneath the surface. Category mapping. Competitive audit. The uncomfortable questions most brand conversations avoid. We are looking for what is true — not what sounds good.",
  },
  {
    number: "Phase 02",
    name: "Distil",
    body: "We find the signal in the noise. What's original, what's borrowed, what's performance mistaken for personality. The Only You Test runs here. If another brand could say it, we remove it.",
  },
  {
    number: "Phase 03",
    name: "Express",
    body: "We give the truth a form. Visual language. Verbal identity. The Brand OS — the document that makes every future brand decision faster, sharper, and consistent.",
  },
];

export default function FrameworkPage() {
  return (
    <>
      <NavBar theme="dark" />

      {/* Hero */}
      <section className="bg-parchment pt-32 pb-20 px-6">
        <div className="max-w-[720px] mx-auto">
          <h1 className="font-caveat text-[38px] md:text-[60px] text-ink leading-tight">
            The Extraction Framework™
          </h1>
          <p className="font-fraunces italic text-[18px] md:text-[20px] text-stone mt-4">
            Nine layers. Three phases. One question underneath all of it.
          </p>
          <p className="font-fraunces italic text-[16px] md:text-[18px] text-stone mt-8 max-w-[600px] leading-relaxed">
            Most branding starts with a blank canvas. We start with the
            conviction that everything the brand needs to be is already present
            — in the founder&rsquo;s language, decisions, contradictions, and
            certainties. The Framework doesn&rsquo;t create. It extracts.
          </p>
        </div>
      </section>

      {/* Three phases */}
      <section className="bg-parchment pb-20 md:pb-32 px-6">
        <div className="max-w-[720px] mx-auto space-y-6">
          {phases.map(({ number, name, body }) => (
            <div
              key={name}
              className="bg-linen border border-dust px-8 py-8"
            >
              <p className="font-epilogue font-semibold text-[13px] uppercase tracking-widest text-stone">
                {number}
              </p>
              <h2 className="font-caveat text-[36px] text-ink mt-2">
                {name}
              </h2>
              <p className="font-epilogue font-light text-[16px] text-stone mt-4 leading-relaxed">
                {body}
              </p>
            </div>
          ))}
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
          <p className="font-epilogue font-light text-[16px] text-stone mt-8 leading-relaxed">
            Every claim. Every line of copy. Every design decision. The Only
            You Test is not a filter — it is the entire point.
          </p>
        </div>
      </section>

      {/* The Output */}
      <section className="bg-parchment py-20 md:py-32 px-6">
        <div className="max-w-[680px] mx-auto">
          <h2 className="font-caveat text-[40px] text-ink leading-tight">
            The Brand OS.
          </h2>
          <p className="font-epilogue font-light text-[17px] text-stone mt-6 max-w-[540px] leading-relaxed">
            Not a style guide. Not a brand book. An operating system for every
            brand decision you will make for the next decade — strategy,
            identity, voice, and positioning in one coherent document that
            travels with the brand wherever it goes.
          </p>
          <Link
            href="/audit"
            className="font-epilogue font-medium text-[16px] text-saffron mt-10 block hover:opacity-80 transition-opacity"
          >
            See what the Audit delivers →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
