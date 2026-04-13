import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About the Work",
  description:
    "SPANDA. was built by running our own framework on ourselves first. The origin story of a brand strategy consultancy built on extraction, not construction.",
  alternates: { canonical: "https://spanda.studio/about" },
  openGraph: {
    title: "About the Work | SPANDA.",
    description:
      "SPANDA. was built by running our own framework on ourselves first. The origin story of a brand strategy consultancy built on extraction, not construction.",
    url: "https://spanda.studio/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <NavBar theme="dark" />

      <main className="bg-parchment pt-24 pb-0">
        <div className="max-w-[680px] mx-auto px-6 pb-24">

          {/* H1 */}
          <h1 className="font-caveat text-[40px] md:text-[64px] text-ink leading-tight">
            About the work.
          </h1>

          {/* Opening body — Ink */}
          <div className="mt-10 space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-ink leading-[1.85]">
            <p>
              There is a moment in every founder&rsquo;s journey that doesn&rsquo;t
              make it into the pitch deck.
            </p>
            <p>
              The moment they knew — before the product, before the revenue,
              before the team — exactly what they were building and why. A
              clarity so complete it felt less like an idea and more like a
              memory. Like recognising something that was already there.
            </p>
            <p>That moment is the brand.</p>
            <p>
              Everything after — the naming, the identity, the language, the
              campaigns — is simply the work of making that moment legible to
              the world.
            </p>
            <p>
              Most of the industry starts with a blank canvas. Colour. Shape.
              Tagline. Campaign. They call it building.
            </p>
            <p>
              We started with a different question. Not{" "}
              <em>what should this brand look like?</em> But{" "}
              <em>what is this brand, before anyone touches it?</em>
            </p>
          </div>

          {/* THE NAME */}
          <div className="mt-16 space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
            <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
              The Name
            </p>
            <p>
              Spanda. Sanskrit. Kashmir Shaivism. The primordial creative
              vibration — the pulse that precedes all form. Not sound. Not
              light. The impulse that makes both possible.
            </p>
            <p>
              We chose it because it named exactly what we do. We don&rsquo;t
              create the pulse. It&rsquo;s already there, in every founder who
              has built something real. Our work is to find the frequency,
              amplify it, and protect it from everything that would dilute it.
            </p>
          </div>

          {/* THE IDENTITY */}
          <div className="mt-16 space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
            <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
              The Identity
            </p>
            <p>
              When we ran our own framework on ourselves — completely, without
              exception — three things survived.
            </p>
            <p>Ink. Parchment. Saffron.</p>
            <p>
              Not because they are beautiful. Because they are honest. Ink is
              conviction written down. Parchment is the surface serious
              thinking has always chosen. Saffron appears once — because one
              truth, stated clearly, is more powerful than ten stated loudly.
            </p>
          </div>

          {/* THE HAND */}
          <div className="mt-16 space-y-8 font-epilogue font-light text-lg md:text-lg text-stone leading-[1.85]">
            <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
              The Hand
            </p>
            <p className="font-caveat text-3xl md:text-3xl text-ink leading-tight">
              There is a reason our headlines are handwritten.
            </p>
            <p>
              Not because warmth is a strategy. Not because personality is a
              differentiator. Because the truest things a founder knows about
              their brand were never typed. They were written — in margins, on
              napkins, in notebooks that nobody else has read. The moment of
              absolute clarity always arrives with a pen in hand.
            </p>
            <p>
              Caveat is that moment given a typeface. The evidence of a
              thinking mind mid-thought. You can see the hand that wrote it.
              That visibility is the point. Conviction cannot be kerned into a
              typeface designed by committee. It lives in the line that moves
              slightly, that carries the weight of the wrist that made it.
            </p>
            <p>
              When we set our headlines in Caveat, we are not making a
              stylistic choice. We are making a philosophical one. This came
              from a person. A person who thought hard, decided clearly, and
              wrote it down.
            </p>
            <p>
              Ink on paper. The oldest proof of thought.
            </p>
          </div>

          {/* THE MARK */}
          <div className="mt-16 space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
            <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
              The Mark
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/spanda-light.png"
              alt="SPANDA."
              style={{ width: "200px", height: "auto", display: "block", marginBottom: "24px" }}
            />
            <p>
              In Kashmir Shaivism, the Bindu is the point of infinite potential
              compressed to zero dimension — the singularity before everything
              expanded into form. Every philosophical tradition that has tried
              to describe the origin of things arrives at the same image. A
              point. Complete. Still. Everything already present inside it,
              waiting for the impulse that makes it real.
            </p>
            <p>
              We placed it after the name. Not as punctuation. As philosophy.
            </p>
            <p>
              A dot is a line that hasn&rsquo;t started yet.
              <br />
              Our mark is the moment it does.
            </p>
          </div>

        </div>

        {/* PRAVAH transition — Linen block */}
        <section className="bg-linen py-16 px-6">
          <div className="max-w-[560px] mx-auto text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/pravah-light.png"
              alt="PRAVAH"
              style={{ width: "189px", height: "auto", margin: "0 auto 24px" }}
            />
            <p className="font-epilogue font-light text-[16px] text-stone leading-relaxed">
              PRAVAH was the second extraction. The Creative agency born from
              the strategy consultancy. Its story follows the same process —
              different brand, same rigour, same framework, same refusal to
              decorate what should be expressed.
            </p>
            <Link
              href="/pravah-story"
              className="font-epilogue font-medium text-[15px] text-saffron mt-6 block hover:opacity-80 transition-opacity"
            >
              Read the PRAVAH story →
            </Link>
          </div>
        </section>

        {/* Closing section — Ink */}
        <section className="bg-ink py-24 px-6">
          <div className="max-w-[560px] mx-auto text-center">
            <p className="font-epilogue font-light text-[20px] text-parchment">
              You are not our first client.
            </p>
            <p className="font-epilogue font-semibold text-[20px] text-parchment">
              We are.
            </p>
            <div className="mt-6 space-y-4 font-epilogue font-light text-[16px] text-stone leading-relaxed">
              <p>
                Every framework we will run on your brand, we ran on ourselves
                first. Every question we will ask you, we answered honestly
                before asking.
              </p>
              <p>
                We built nothing. We extracted everything.
                What came out is what you see.
              </p>
            </div>
            <p className="font-epilogue font-medium text-[16px] text-saffron mt-10">
              Now run your brand through the same process.
            </p>
            <Link
              href="/audit"
              className="font-epilogue font-medium text-[16px] text-saffron block mt-2 hover:opacity-80 transition-opacity"
            >
              Begin the Audit →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
