"use client";

import Link from "next/link";
import { useState } from "react";

const pairs = [
  {
    unfound: "Explains what it does in three sentences, then apologises for the length.",
    found: "One sentence. No qualifiers.",
  },
  {
    unfound: "Looks different on Instagram than on a pitch deck than on a business card.",
    found: "Unmistakable at every touchpoint.",
  },
  {
    unfound: "Follows the category conventions because that's what the category does.",
    found: "Knows exactly which conventions to break and why.",
  },
  {
    unfound: "Could be any brand in the category with a logo swap.",
    found: "Could only be this brand.",
  },
  {
    unfound: "Repositions every two years when results disappoint.",
    found: "Gets clearer and stronger over time because the foundation is real.",
  },
];

const dimensions = [
  { id: 1,  name: "Clarity",            question: "Can you explain what you do in one sentence?" },
  { id: 2,  name: "Differentiation",    question: "Is there something only you can claim?" },
  { id: 3,  name: "Consistency",        question: "Does your brand show up the same way everywhere?" },
  { id: 4,  name: "Emotional Resonance",question: "Do people feel something when they encounter you?" },
  { id: 5,  name: "Visual Identity",    question: "Does your visual system reflect your actual positioning?" },
  { id: 6,  name: "Voice",              question: "Do you have a tone that is unmistakably yours?" },
  { id: 7,  name: "Positioning",        question: "Do you own a distinct place in your category?" },
  { id: 8,  name: "Purpose",            question: "Is there a conviction underneath the commercial?" },
  { id: 9,  name: "Founder Alignment",  question: "Does the brand reflect who you actually are?" },
  { id: 10, name: "Audience Clarity",   question: "Do you know exactly who you are not for?" },
  { id: 11, name: "Proof",              question: "Can you demonstrate what you claim?" },
  { id: 12, name: "Longevity",          question: "Is this built to endure or to trend?" },
];

interface BrandForm {
  brandName: string;
  website: string;
  description: string;
  competitors: string;
  hiddenStory: string;
  uniqueClaim: string;
  linkedin: string;
  instagram: string;
}

interface ContactForm {
  firstName: string;
  email: string;
  company: string;
  city: string;
}

const emptyBrand: BrandForm = { brandName: "", website: "", description: "", competitors: "", hiddenStory: "", uniqueClaim: "", linkedin: "", instagram: "" };
const emptyContact: ContactForm = { firstName: "", email: "", company: "", city: "" };

export default function ScoreForm() {
  const [brand, setBrand] = useState<BrandForm>(emptyBrand);
  const [selected, setSelected] = useState<number | null>(1);
  const [lockedMsg, setLockedMsg] = useState(false);
  const [contact, setContact] = useState<ContactForm>(emptyContact);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setBrandField = (field: keyof BrandForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setBrand((prev) => ({ ...prev, [field]: e.target.value }));

  const setContactField = (field: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setContact((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    setSubmitting(true);
    setError(null);

    const dimension = dimensions.find((d) => d.id === selected);

    try {
      const res = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brand, dimension, contact }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Email us directly at hello@spanda.studio");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full font-epilogue font-light text-[15px] text-ink bg-transparent border border-ink px-4 py-3 focus:outline-none focus:border-saffron transition-colors";
  const labelClass = "font-epilogue font-light text-[13px] text-ink mb-1 block";
  const textareaClass = `${inputClass} resize-none`;

  return (
    <>
      {/* STAGE 1 — Reading section (Ink) */}
      <section className="bg-ink pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">

          <h1 className="font-caveat text-[44px] md:text-[48px] text-parchment leading-tight text-center">
            What does a found brand look like?
          </h1>

          <p className="font-epilogue font-light text-[16px] text-stone mt-4 max-w-[640px] mx-auto text-center leading-relaxed">
            Most brands can feel the gap. The distance between what they know
            about themselves and what the market actually encounters.
            These are the markers.
          </p>

          {/* Column headers — desktop only */}
          <div className="hidden md:grid md:grid-cols-2 gap-4 mt-12 mb-4">
            <p className="font-epilogue font-semibold text-[13px] text-stone">Unfound</p>
            <p className="font-epilogue font-semibold text-[13px] text-saffron">Found</p>
          </div>

          {/* Pairs */}
          <div className="mt-12 md:mt-0 space-y-4">
            {pairs.map(({ unfound, found }, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
                <div
                  className="px-5 py-4 border-b border-stone/10 md:border-b-0"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone mb-2 md:hidden">
                    Unfound
                  </p>
                  <p className="font-epilogue font-light text-[15px] text-stone leading-relaxed">
                    {unfound}
                  </p>
                </div>
                <div
                  className="px-5 py-4"
                  style={{ background: "rgba(201,120,32,0.07)", borderLeft: "2px solid rgba(201,120,32,0.4)" }}
                >
                  <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-saffron mb-2 md:hidden">
                    Found
                  </p>
                  <p className="font-epilogue font-light text-[15px] text-parchment leading-relaxed">
                    {found}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider + prompt + CTA */}
          <hr
            className="border-0 border-t mt-12"
            style={{ borderColor: "rgba(140,130,119,0.2)" }}
          />
          <p className="font-epilogue font-light text-[16px] text-stone mt-8 text-center leading-relaxed">
            Which side does your brand sit on?
            <br />
            The analysis will tell you — specifically, across the dimension that matters most to you.
          </p>

        </div>
      </section>

      {/* STAGE 2 — Form or Confirmation (Parchment) */}
      {submitted ? (
        <section id="score-form" className="bg-parchment py-24 px-6 text-center">
          <div className="max-w-[480px] mx-auto">
            <h2 className="font-caveat text-[40px] text-ink">We have it.</h2>
            <p className="font-epilogue font-light text-[16px] text-stone mt-4 leading-relaxed">
              Your Brand Dimension Analysis will be in your inbox by tomorrow
              morning. Every submission is reviewed before it leaves our desk.
            </p>
            <p className="font-epilogue font-light text-[16px] text-stone mt-6">
              If you want to go further —
            </p>
            <Link
              href="/audit"
              className="font-epilogue font-medium text-[16px] text-saffron mt-2 block hover:opacity-80 transition-opacity"
            >
              Begin the Audit →
            </Link>
          </div>
        </section>
      ) : (
        <form
          id="score-form"
          onSubmit={handleSubmit}
          className="bg-parchment py-20 px-6"
        >
          <div className="max-w-[680px] mx-auto">

            {/* YOUR BRAND */}
            <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone-accessible">
              Your Brand
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label className={labelClass}>Brand name</label>
                <input required type="text" value={brand.brandName} onChange={setBrandField("brandName")} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Website URL</label>
                <input required type="text" value={brand.website} onChange={setBrandField("website")} className={inputClass} placeholder="yourwebsite.com" />
              </div>
              <div>
                <label className={labelClass}>What do you do, and for whom?</label>
                <textarea required rows={2} value={brand.description} onChange={setBrandField("description")} className={textareaClass} />
              </div>
              <div>
                <label className={labelClass}>Name three competitors you actually think about.</label>
                <textarea required rows={2} value={brand.competitors} onChange={setBrandField("competitors")} className={textareaClass} />
              </div>
              <div>
                <label className={labelClass}>Tell us something about how this was built that most people would never know.</label>
                <textarea
                  rows={3}
                  value={brand.hiddenStory}
                  onChange={setBrandField("hiddenStory")}
                  className={textareaClass}
                  placeholder="e.g. We rejected the first manufacturer because they couldn't meet our standard — spent eight months finding one who could. / The product was ready two years before we launched. We waited until we were certain. / There is a step in our process that costs three times more than the industry standard. We have never removed it."
                />
              </div>
              <div>
                <label className="font-epilogue font-medium text-[15px] text-ink mb-2 block">
                  The one thing you believe only your brand can honestly claim.
                </label>
                <textarea required rows={3} value={brand.uniqueClaim} onChange={setBrandField("uniqueClaim")} className={textareaClass} />
                <p className="font-epilogue font-light text-[13px] text-stone-accessible mt-2">
                  This is the most important question on the page. Take your time.
                </p>
              </div>
              <div>
                <label className={labelClass}>LinkedIn company page</label>
                <input type="text" value={brand.linkedin} onChange={setBrandField("linkedin")} className={inputClass} placeholder="linkedin.com/company/yourbrand" />
                <p className="font-epilogue font-light text-[12px] text-stone-accessible mt-1">How your brand presents in a professional context</p>
              </div>
              <div>
                <label className={labelClass}>Instagram handle</label>
                <input type="text" value={brand.instagram} onChange={setBrandField("instagram")} className={inputClass} placeholder="@yourbrand" />
                <p className="font-epilogue font-light text-[12px] text-stone-accessible mt-1">How your brand shows up with consumers</p>
              </div>
            </div>

            {/* DIMENSION SELECTION */}
            <div className="mt-14">
              <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone-accessible">
                Choose Your Dimension
              </p>
              <p className="font-epilogue font-light text-[14px] text-stone mt-2 mb-4">
                Pick the one you feel least certain about.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dimensions.map(({ id, name, question }) => {
                  const isClarity = id === 1;
                  const isActive = selected === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => {
                        if (isClarity) {
                          setSelected(id);
                          setLockedMsg(false);
                        } else {
                          setLockedMsg(true);
                        }
                      }}
                      className="text-left px-4 py-3 border transition-colors"
                      style={{
                        background: isActive ? "#EDE8DF" : "transparent",
                        borderColor: isActive ? "#C97820" : "#D8D1C4",
                        borderLeftWidth: isActive ? "3px" : "1px",
                        opacity: isClarity ? 1 : 0.45,
                        cursor: isClarity ? "pointer" : "default",
                      }}
                    >
                      <p className="font-epilogue font-medium text-[14px] text-ink">{name}</p>
                      <p className="font-epilogue font-light text-[13px] text-stone-accessible mt-0.5">{question}</p>
                    </button>
                  );
                })}
              </div>
              {lockedMsg && (
                <div className="bg-linen border-l-2 border-saffron p-5 rounded mt-4">
                  <p className="font-epilogue font-semibold text-[15px] text-ink">
                    This dimension is part of the full Brand Strength Audit.
                  </p>
                  <p className="font-epilogue font-light text-[14px] text-stone mt-2">
                    The Audit scores all 12 dimensions across your complete brand expression. ₹35,000. 7 days. Debrief included.
                  </p>
                  <Link href="/audit" className="font-epilogue font-medium text-[14px] text-saffron mt-3 block hover:opacity-80 transition-opacity">
                    Begin the Audit →
                  </Link>
                </div>
              )}
            </div>

            {/* CONTACT CAPTURE */}
            <div className="mt-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>First name</label>
                  <input required type="text" value={contact.firstName} onChange={setContactField("firstName")} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input required type="email" value={contact.email} onChange={setContactField("email")} className={inputClass} />
                  <p className="font-epilogue font-light text-[12px] text-stone-accessible mt-2 whitespace-nowrap">
                    Your analysis arrives here. No marketing emails. Ever.
                  </p>
                </div>
                <div>
                  <label className={labelClass}>Company</label>
                  <input required type="text" value={contact.company} onChange={setContactField("company")} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>City</label>
                  <input required type="text" value={contact.city} onChange={setContactField("city")} className={inputClass} />
                </div>
              </div>
            </div>

            {error && (
              <p className="font-epilogue font-light text-[13px] text-saffron mt-4">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full font-epilogue font-semibold text-[16px] text-ink bg-saffron px-6 py-4 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {submitting ? "Sending…" : "Score your brand →"}
            </button>

          </div>
        </form>
      )}
    </>
  );
}
