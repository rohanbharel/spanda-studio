import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AuditForm from "../components/AuditForm";

export const metadata: Metadata = {
  title: "Brand Strength Audit",
  description:
    "A 48-hour brand diagnostic for founders who want to know what their brand is actually doing. ₹35,000. Includes debrief. SPANDA.",
  alternates: { canonical: "https://spanda.studio/audit" },
  openGraph: {
    title: "Brand Strength Audit | SPANDA.",
    description:
      "A 48-hour brand diagnostic for founders who want to know what their brand is actually doing. ₹35,000. Includes debrief. SPANDA.",
    url: "https://spanda.studio/audit",
    type: "website",
  },
};

export default function AuditPage() {
  return (
    <>
      <NavBar theme="dark" />

      {/* Section 1 — Hero */}
      <section className="bg-ink pt-32 pb-24 px-6">
        <div className="max-w-[680px] mx-auto">
          <h1 className="font-caveat text-[40px] md:text-[64px] text-parchment leading-tight">
            The Brand Strength Audit.
          </h1>
          <p className="font-epilogue font-light text-[18px] md:text-[20px] text-stone mt-4 max-w-[520px] leading-relaxed">
            ₹35,000. 48 hours. A diagnosis that tells you exactly what your
            brand is and isn&rsquo;t doing.
          </p>
          <hr className="border-0 border-t border-dust mt-10" style={{ width: "60px" }} />
          <p className="font-epilogue font-light text-[15px] text-stone mt-4">
            Includes a debrief meeting. No retainer. No ongoing commitment.
          </p>
        </div>
      </section>

      {/* Section 2 — The Deliverable */}
      <section className="bg-parchment py-20 md:py-32 px-6">
        <div className="max-w-[680px] mx-auto">
          <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
            What You Receive
          </p>
          <h2 className="font-caveat text-[44px] text-ink leading-tight mt-4">
            Not a report. A diagnosis.
          </h2>
          <p className="font-epilogue font-light text-[17px] text-stone mt-6 leading-relaxed">
            Most brand audits tell you what you already know. The Brand Strength
            Audit tells you what you&rsquo;ve been avoiding. Your brand, assessed
            across 12 dimensions of the{" "}
            <Link
              href="/framework"
              className="text-ink underline underline-offset-4 hover:text-saffron transition-colors"
            >
              The Extraction Framework™
            </Link>
            , with a ranked priority list and a clear statement of what to fix
            first.
          </p>

          {/* Three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {[
              {
                title: "12-Dimension Assessment",
                body: "Your brand scored across every layer of the Extraction Framework™. No dimension skipped.",
              },
              {
                title: "Priority Diagnosis",
                body: "Ranked list of what to address, in the order that creates the most impact on perception and conversion.",
              },
              {
                title: "Sprint Readiness Assessment",
                body: "A clear recommendation on next steps — and the honest conversation about whether the Full Sprint is the right move.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="bg-linen border border-dust px-6 py-5"
                style={{ borderRadius: "8px" }}
              >
                <p className="font-epilogue font-semibold text-[15px] text-ink">
                  {title}
                </p>
                <p className="font-epilogue font-light text-[14px] text-stone mt-2 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — The Process */}
      <section className="bg-ink py-20 md:py-32 px-6">
        <div className="max-w-[680px] mx-auto">
          <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
            How It Works
          </p>
          <div className="mt-10 space-y-10">
            {[
              {
                n: "1",
                title: "You share context.",
                body: "We send you a focused pre-work document. 30 minutes of honest thinking about your brand, your market, and the gaps you already sense.",
              },
              {
                n: "2",
                title: "We run the framework.",
                body: "Your brand through all 12 dimensions. 48 hours. No shortcuts.",
              },
              {
                n: "3",
                title: "We meet.",
                body: "The debrief is where the real work begins. We walk through the diagnosis together. You leave knowing exactly what to do next.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="flex gap-6">
                <span className="font-epilogue font-semibold text-[22px] text-saffron shrink-0 w-6">
                  {n}
                </span>
                <div>
                  <p className="font-epilogue font-semibold text-[17px] text-parchment">
                    {title}
                  </p>
                  <p className="font-epilogue font-light text-[16px] text-stone mt-2 leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — CTA + Form */}
      <section className="bg-parchment py-20 md:py-24 px-6">
        <div className="max-w-[560px] mx-auto">
          <h2 className="font-caveat text-[44px] text-ink leading-tight text-center">
            Ready to see what&rsquo;s actually there?
          </h2>
          <p className="font-epilogue font-semibold text-[22px] text-ink mt-4 text-center">
            ₹35,000 — 48-hour turnaround
          </p>
          <p className="font-epilogue font-light text-[14px] text-stone mt-2 text-center">
            Investment for the Full Sprint is discussed at the debrief — after
            you&rsquo;ve seen the diagnosis.
          </p>
          <AuditForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
