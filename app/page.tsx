import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* Hero — Moment 1 */}
      <main className="min-h-screen bg-ink flex flex-col items-center justify-center px-6 pt-20 text-center">
        {/* Hero logo — observed by NavBar to trigger nav logo visibility */}
        <Image
          id="hero-logo"
          src="/logos/spanda-dark.png"
          alt="SPANDA."
          width={280}
          height={80}
          className="w-[200px] md:w-[280px] h-auto"
          priority
        />

        {/* Gap */}
        <div className="h-12" />

        {/* Headline */}
        <h1 className="font-caveat text-[42px] md:text-[72px] text-parchment leading-tight">
          Your brand is already there.
        </h1>

        {/* Subheading */}
        <p className="font-epilogue font-light text-base md:text-xl text-stone mt-4 max-w-[560px]" spellCheck={false}>
          Most agencies build one for you. We extract the one you already have.
        </p>

        {/* Gap */}
        <div className="h-12" />

        {/* CTA */}
        <Link
          href="/audit"
          className="font-epilogue font-medium text-base text-saffron border border-saffron px-8 py-4 hover:bg-saffron hover:text-ink transition-colors"
          style={{ borderRadius: "2px" }}
        >
          Begin the Brand Audit →
        </Link>

        {/* Qualifier */}
        <p className="font-epilogue font-light text-[13px] text-stone mt-4">
          ₹35,000&nbsp;&nbsp;·&nbsp;&nbsp;48 hours&nbsp;&nbsp;·&nbsp;&nbsp;Complete brand diagnosis
        </p>
      </main>

      {/* Moment 2 — The Problem */}
      <section className="bg-parchment py-20 md:py-32 px-6">
        <div className="max-w-[800px] mx-auto">

          {/* Label */}
          <p className="font-epilogue text-[12px] uppercase tracking-widest text-stone">
            The Industry Problem
          </p>

          {/* Headline */}
          <h2 className="font-caveat text-[42px] md:text-[64px] text-ink leading-tight mt-4">
            Most branding is expensive decoration.
          </h2>

          {/* Body */}
          <p className="font-epilogue font-light text-[17px] md:text-[20px] text-stone leading-relaxed mt-6">
            The agency arrives with a mood board. Presents three &lsquo;directions&rsquo;. You pick one. A guidelines PDF is produced. Filed. Forgotten. Six months later the brand looks nothing like the PDF — because the PDF was never really yours.
          </p>
          <p className="font-epilogue font-light text-[17px] md:text-[20px] text-stone leading-relaxed mt-4">
            This is the convention. Every agency follows it. We mapped it, studied it, and built the opposite.
          </p>

          {/* Divider */}
          <hr className="border-0 border-t border-dust mt-12" />

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">

            {/* Left — What they do */}
            <div>
              <p className="font-epilogue text-[11px] uppercase tracking-widest text-stone">
                What They Do
              </p>
              <ul className="mt-3 space-y-3">
                {[
                  "Build from outside in",
                  "Present options, not truths",
                  "Deliver a PDF and disappear",
                  "Style over substance",
                ].map((item) => (
                  <li key={item} className="font-epilogue font-light text-[17px] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — What we do */}
            <div>
              <p className="font-epilogue text-[11px] uppercase tracking-widest text-saffron">
                What We Do
              </p>
              <ul className="mt-3 space-y-3">
                {[
                  "Extract from inside out",
                  "Find the one truth that already exists",
                  "Deliver a living Brand OS",
                  "Substance first. Always.",
                ].map((item) => (
                  <li key={item} className="font-epilogue font-light text-[17px] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Moment 3 — The Extraction Framework */}
      <section className="bg-linen py-20 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">

          {/* Label */}
          <p className="font-epilogue text-[11px] uppercase tracking-widest text-stone">
            The Methodology
          </p>

          {/* Headline */}
          <h2 className="font-epilogue font-semibold text-[36px] md:text-[52px] text-ink leading-tight mt-3">
            The Extraction Framework™
          </h2>

          {/* Subline */}
          <p className="font-epilogue font-light text-[18px] text-stone mt-3">
            3 phases. 9 layers. 9 proprietary tools. Every output passes The Only You Test.
          </p>

          {/* Phase cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

            {/* Card 1 — Excavate */}
            <div className="bg-ink rounded-sm p-7 flex flex-col">
              <p className="font-epilogue font-medium text-[13px] uppercase tracking-wide text-saffron">
                01 — Excavate
              </p>
              <h3 className="font-epilogue font-semibold text-[22px] text-parchment mt-2">
                Map the market.
              </h3>
              <p className="font-epilogue font-light text-[15px] text-stone leading-relaxed mt-3">
                Find the human truth before touching the brand. Convention audit. Frequency scan. What your category does — and what it leaves open.
              </p>
              <hr className="border-0 border-t border-dust mt-5" />
              <p className="font-epilogue font-light text-[13px] text-stone mt-4">
                The Convention Map&nbsp;&nbsp;·&nbsp;&nbsp;The Frequency Scan
              </p>
            </div>

            {/* Card 2 — Distill */}
            <div className="bg-linen rounded-sm p-7 flex flex-col">
              <p className="font-epilogue font-medium text-[13px] uppercase tracking-wide text-ink">
                02 — Distill
              </p>
              <h3 className="font-epilogue font-semibold text-[22px] text-ink mt-2">
                Find the truth.
              </h3>
              <p className="font-epilogue font-light text-[15px] text-stone leading-relaxed mt-3">
                Reduce the brand to its single irreducible truth. Soul architecture. The disruption point. The voice no other brand in your category owns.
              </p>
              <hr className="border-0 border-t border-dust mt-5" />
              <p className="font-epilogue font-light text-[13px] text-stone mt-4">
                The Soul Compass&nbsp;&nbsp;·&nbsp;&nbsp;The Disruption Crosshair&nbsp;&nbsp;·&nbsp;&nbsp;The Voice Archaeology
              </p>
            </div>

            {/* Card 3 — Express */}
            <div className="bg-saffron rounded-sm p-7 flex flex-col">
              <p className="font-epilogue font-medium text-[13px] uppercase tracking-wide text-ink">
                03 — Express
              </p>
              <h3 className="font-epilogue font-semibold text-[22px] text-ink mt-2">
                Make it permanent.
              </h3>
              <p className="font-epilogue font-light text-[15px] leading-relaxed mt-3" style={{ color: "rgba(28, 24, 20, 0.75)" }}>
                Give the brand a body — visual identity, verbal system, architecture. Everything flows from what was extracted. Nothing is imposed.
              </p>
              <hr className="border-0 border-t mt-5" style={{ borderColor: "rgba(28, 24, 20, 0.2)" }} />
              <p className="font-epilogue font-light text-[13px] mt-4" style={{ color: "rgba(28, 24, 20, 0.75)" }}>
                The Visual Brief Engine&nbsp;&nbsp;·&nbsp;&nbsp;The Architecture Matrix&nbsp;&nbsp;·&nbsp;&nbsp;The 12-Dimension Scorecard&nbsp;&nbsp;·&nbsp;&nbsp;The 90-Day Signal Map
              </p>
            </div>

          </div>

          {/* Only You Test bar */}
          <div className="bg-ink rounded-sm px-7 py-5 mt-12 text-center">
            <p className="font-epilogue font-medium text-[15px] text-parchment">
              THE ONLY YOU TEST&nbsp;&nbsp;—&nbsp;&nbsp;If another brand could claim it, it fails. Refined until it cannot.
            </p>
          </div>
          <p className="font-epilogue font-light text-[13px] text-stone text-center mt-3">
            AI-powered research and synthesis. Human judgment on every output.
          </p>

        </div>
      </section>

      {/* Moment 4 — The Proof */}
      <section className="bg-ink py-20 md:py-32 px-6">
        <div className="max-w-[900px] mx-auto">

          {/* Label */}
          <p className="font-epilogue text-[11px] uppercase tracking-widest text-stone">
            The Result
          </p>

          {/* Headline */}
          <h2 className="font-caveat text-[42px] md:text-[64px] text-parchment leading-tight mt-4">
            What a found brand looks like.
          </h2>

          {/* Subline */}
          <p className="font-epilogue font-light text-[18px] text-stone mt-3">
            The Brand Strength Scorecard measures 12 dimensions before and after The Extraction Framework. This is what changes.
          </p>

          {/* 12 Dimension cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              { name: "Clarity",                     desc: "Does your brand communicate one thing instantly?" },
              { name: "Distinction",                 desc: "Could it only be you?" },
              { name: "Authenticity",                desc: "Does it come from conviction or convention?" },
              { name: "Purpose Strength",            desc: "Is the why undeniable?" },
              { name: "Audience Resonance",          desc: "Does your ideal client feel found?" },
              { name: "Visual Coherence",            desc: "Does everything look like it belongs together?" },
              { name: "Verbal Consistency",          desc: "Does every word sound like the same voice?" },
              { name: "Market Disruption",           desc: "Does it challenge the category's assumptions?" },
              { name: "Cultural Relevance",          desc: "Will it matter in 3 years, not just today?" },
              { name: "Competitive Differentiation", desc: "What do you own that no one else can claim?" },
              { name: "Brand Architecture Logic",    desc: "Do all parts of the brand serve the whole?" },
              { name: "Activation Readiness",        desc: "Can it be activated consistently without you in the room?" },
            ].map(({ name, desc }) => (
              <div
                key={name}
                className="rounded-sm p-5 border"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(140,130,119,0.1)" }}
              >
                <p className="font-epilogue font-medium text-[15px] text-parchment">
                  {name}
                </p>
                <p className="font-epilogue font-light text-[13px] text-stone mt-1">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA bar */}
          <div className="bg-saffron rounded-sm px-10 py-8 mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-epilogue font-light text-[17px] text-ink">
                Most brands score between 28 and 45 before working with SPANDA.
              </p>
              <p className="font-epilogue font-semibold text-[20px] text-ink mt-1">
                The average after: 88/100.
              </p>
            </div>
            <Link
              href="/audit"
              className="font-epilogue font-medium text-[15px] text-parchment bg-ink px-7 py-[14px] rounded-sm shrink-0 hover:opacity-90 transition-opacity"
            >
              Score your brand free →
            </Link>
          </div>

        </div>
      </section>

      {/* Moment 5 — Entry Points */}
      <section className="bg-parchment py-20 md:py-32 px-6">
        <div className="max-w-[900px] mx-auto">

          {/* Label */}
          <p className="font-epilogue text-[11px] uppercase tracking-widest text-stone">
            Where to Begin
          </p>

          {/* Headline */}
          <h2 className="font-epilogue font-semibold text-[36px] md:text-[52px] text-ink leading-tight mt-3">
            Two ways in.
          </h2>

          {/* Subline */}
          <p className="font-epilogue font-light text-[18px] text-stone mt-3">
            One is a diagnosis. One is a transformation. Most clients start with the first.
          </p>

          {/* Offer cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

            {/* Card 1 — Brand Audit */}
            <div className="bg-linen border border-dust rounded-sm p-9 flex flex-col">
              <p className="font-epilogue text-[11px] uppercase tracking-widest text-saffron">
                Start Here
              </p>
              <h3 className="font-epilogue font-semibold text-[28px] text-ink mt-2">
                Brand Strength Audit
              </h3>
              <div className="flex items-baseline gap-2 mt-4">
                <span className="font-epilogue font-light text-[32px] text-ink">₹35,000</span>
                <span className="font-epilogue font-light text-[14px] text-stone">/ one engagement</span>
              </div>
              <hr className="border-0 border-t border-dust mt-4" />
              <ul className="mt-4 space-y-3">
                {[
                  "Complete Brand Strength Score across 12 dimensions",
                  "Identification of your single biggest brand gap",
                  "A clear brief for what the Sprint will fix",
                  "Delivered in 48 hours",
                ].map((item) => (
                  <li key={item} className="font-epilogue font-light text-[15px] text-ink">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grow" />
              <Link
                href="/audit"
                className="font-epilogue font-medium text-[15px] text-parchment bg-ink rounded-sm px-4 py-[14px] mt-8 text-center hover:opacity-90 transition-opacity"
              >
                Begin the Audit →
              </Link>
              <p className="font-epilogue font-light text-[12px] text-stone text-center mt-2">
                No commitment to the Sprint required
              </p>
            </div>

            {/* Card 2 — The Full Sprint */}
            <div className="bg-ink rounded-sm p-9 flex flex-col">
              <p className="font-epilogue text-[11px] uppercase tracking-widest text-stone">
                The Complete Engagement
              </p>
              <h3 className="font-epilogue font-semibold text-[28px] text-parchment mt-2">
                The Extraction Sprint
              </h3>
              <p className="font-epilogue font-light text-[18px] text-stone mt-4">
                Investment discussed after Audit
              </p>
              <hr className="border-0 border-t mt-4" style={{ borderColor: "rgba(140,130,119,0.2)" }} />
              <ul className="mt-4 space-y-3">
                {[
                  "The complete Extraction Framework — all 9 layers",
                  "The Brand Retreat — multi-stakeholder, residential",
                  "Your complete Brand OS — living, not a PDF",
                  "Visual and verbal identity system",
                  "The 90-Day Signal Map for activation",
                  "PRAVAH-ready Brand OS for ongoing campaign generation",
                  "AI-powered Brand OS — activatable through PRAVAH for ongoing campaigns",
                ].map((item) => (
                  <li key={item} className="font-epilogue font-light text-[15px] text-parchment">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grow" />
              <Link
                href="/audit"
                className="font-epilogue font-medium text-[15px] text-ink bg-saffron rounded-sm px-4 py-[14px] mt-8 text-center hover:opacity-90 transition-opacity"
              >
                Start with the Audit →
              </Link>
              <p className="font-epilogue font-light text-[12px] text-stone text-center mt-2">
                Most Sprint clients begin with the Audit
              </p>
            </div>

          </div>

          {/* Closing line */}
          <p className="font-epilogue font-light text-[17px] text-stone text-center mt-12">
            Start with the Audit. ₹35,000. 48 hours. You&rsquo;ll know exactly what the Sprint will fix.
          </p>

        </div>
      </section>

      {/* Moment 6 — The Philosophy */}
      <section className="bg-ink py-20 md:py-32 px-6">
        <div className="max-w-[800px] mx-auto">

          {/* Headline */}
          <h2 className="font-caveat text-[44px] md:text-[68px] text-parchment leading-tight">
            Every brand is already there.
          </h2>

          {/* Body */}
          <div className="space-y-6 mt-8">
            <p className="font-epilogue font-light italic text-[20px] text-stone leading-relaxed">
              Spanda.
            </p>
            <p className="font-epilogue font-light text-[17px] md:text-[20px] text-stone leading-relaxed">
              We believe every founder already knows what their brand is. It lives in why they started, what makes them angry about their category, how they describe their work when no one is watching. It is not missing. It has not been built yet. It exists — compressed, unexpressed, waiting.
            </p>
            <p className="font-epilogue font-light text-[17px] md:text-[20px] text-stone leading-relaxed">
              That is what we extract.
            </p>
          </div>

          {/* Divider */}
          <hr className="border-0 border-t mt-12 mb-12" style={{ borderColor: "rgba(140,130,119,0.2)" }} />

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Left — The Name */}
            <div>
              <p className="font-epilogue text-[11px] uppercase tracking-widest text-stone">
                The Name
              </p>
              <p className="font-epilogue font-light text-[16px] text-stone leading-relaxed mt-3">
                Spanda. Sanskrit. The vibration before form. Look it up — or ask us when we meet.
              </p>
            </div>

            {/* Right — The Commitment */}
            <div>
              <p className="font-epilogue text-[11px] uppercase tracking-widest text-stone">
                The Commitment
              </p>
              <p className="font-epilogue font-light text-[16px] text-stone leading-relaxed mt-3">
                We work as partners, not vendors. You bring the conviction and the context. We bring the framework and the rigour. What comes out belongs entirely to you — because it was always yours.
              </p>
            </div>

          </div>

          {/* Bottom — logo + domains */}
          <div className="mt-16 text-center">
            {/* Desktop logo — hidden on mobile (Image component unreliable at small sizes) */}
            <Image
              src="/logos/spanda-dark.png"
              alt="SPANDA."
              width={120}
              height={36}
              className="hidden md:block w-[120px] h-auto mx-auto"
            />
            {/* Mobile logo — plain img for reliable rendering */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/spanda-dark.png"
              alt="SPANDA."
              className="block md:hidden mx-auto"
              style={{ width: "138px", height: "auto" }}
            />
            <Link
              href="https://spanda.studio"
              className="font-epilogue font-semibold text-[13px] text-stone hover:text-parchment transition-colors mt-4 block"
            >
              spanda.studio
            </Link>
            <Link
              href="mailto:hello@spanda.studio"
              className="font-epilogue font-light text-[13px] text-stone hover:text-parchment transition-colors mt-1 block"
            >
              hello@spanda.studio
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink border-t py-12 md:py-16 px-6" style={{ borderColor: "rgba(140,130,119,0.2)" }}>
        <div className="max-w-[1100px] mx-auto">

          {/* ── DESKTOP top row ── */}
          <div className="hidden md:flex items-end justify-between">

            {/* SPANDA block */}
            <div className="pb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/spanda-dark.png" alt="SPANDA." style={{ width: "256px", height: "auto" }} />
              <p className="font-epilogue font-light text-[12px] text-stone mt-1.5">
                Brand Strategy &amp; Identity
              </p>
            </div>

            {/* Vertical rule */}
            <div className="w-px h-12 shrink-0 self-end" style={{ backgroundColor: "rgba(140,130,119,0.2)" }} />

            {/* PRAVAH block */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/pravah-dark.png" alt="PRAVAH" style={{ width: "189px", height: "auto" }} />
              <p className="font-epilogue font-light text-[12px] text-stone mt-1.5">
                Brand Activation
              </p>
              <Link
                href="https://pravah.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="font-epilogue font-light text-[11px] mt-1 block transition-colors hover:text-parchment"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                pravah.agency →
              </Link>
            </div>

          </div>

          {/* ── MOBILE top block ── */}
          <div className="flex md:hidden flex-col items-center text-center">

            {/* PRAVAH only — SPANDA hidden on mobile */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/pravah-dark.png" alt="PRAVAH" style={{ width: "95px", height: "auto" }} />
            <p className="font-epilogue font-light text-[11px] text-stone mt-1.5">
              Brand Activation
            </p>
            <Link
              href="https://pravah.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="font-epilogue font-light text-[11px] mt-1 transition-colors hover:text-parchment"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              pravah.agency →
            </Link>

          </div>

          {/* ── Bottom row ── */}
          <div
            className="mt-8 pt-6 border-t text-center w-full"
            style={{ borderColor: "rgba(140,130,119,0.1)" }}
          >
            <p className="font-epilogue font-light text-[12px]" style={{ color: "rgba(140,130,119,0.5)" }}>
              © 2026 SPANDA. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
