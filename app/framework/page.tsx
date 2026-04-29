import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FrameworkDiagram from "../components/sections/FrameworkDiagram";

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
    images: [
      {
        url: "/logos/OG%20Spanda.png",
        width: 1200,
        height: 630,
        alt: "SPANDA. — Brand Strategy & Identity",
      },
    ],
  },
};

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

      <FrameworkDiagram />

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

      {/* Closing CTA */}
      <section className="bg-linen py-20 md:py-28 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-caveat text-[36px] text-ink leading-tight">
            Ready to run the framework on your brand?
          </h2>
          <p className="font-epilogue font-light text-[16px] text-stone mt-4 leading-relaxed">
            The Audit is where it begins.
            <br />
            ₹35,000. 7 days. A complete diagnosis across 12 dimensions —
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
