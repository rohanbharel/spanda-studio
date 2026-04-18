import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About the Work",
  description:
    "SPANDA. was built by running our own framework on ourselves first. The origin story of a brand strategy and identity consultancy in India, built on extraction, not construction.",
  alternates: { canonical: "https://spanda.studio/about" },
  openGraph: {
    title: "About the Work | SPANDA.",
    description:
      "SPANDA. was built by running our own framework on ourselves first. The origin story of a brand strategy and identity consultancy in India, built on extraction, not construction.",
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
            <p>Monday morning. 9am.</p>
            <p>
              The room has that specific quiet that only happens before something
              important. Everyone is settled. Coffees in hand. The agency has
              just finished — forty slides, six months of work, three directions
              to choose from.
            </p>
            <p>They&rsquo;re looking at you now.</p>
            <p>
              Your team. The agency who flew in for this. All of them waiting
              for the moment you point at one and say — that one.
            </p>
            <p>You look at the three directions on the screen.</p>
            <p>
              The work is good. Any other person in that room would pick one
              without hesitation.
            </p>
            <p>You say nothing.</p>
            <p>
              Because something isn&rsquo;t right and you can&rsquo;t name what
              it is.
            </p>
            <p>
              What happened in that room wasn&rsquo;t a failure of creativity,
              budget, execution — or your capability to judge. It was something
              quieter and more fundamental.
            </p>
            <p>Nobody asked the right question first.</p>
          </div>

          {/* THE NAME */}
          <div className="mt-16 space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
            <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
              The Name
            </p>
            <p>
              SPANDA came out of that silence.
            </p>
            <p>
              Out of the conviction that every founder already carries their
              brand completely formed inside them — before the product launch,
              before the pitch deck, before the agency arrives with forty slides
              and three directions.
            </p>
            <p>
              The brand exists the moment a founder decides something needs to
              exist in the world that doesn&rsquo;t yet. That moment of
              decision — raw, unformed, entirely certain — that is the brand.
            </p>
            <p>Everything after is simply making it visible.</p>
            <p>
              If brands already exist inside founders — then the agency&rsquo;s
              job is not to be creative. It is to be rigorous. Patient. Honest
              enough to keep asking until the truth surfaces.
            </p>
            <p>
              The true answer always feels different from the practiced one. It
              arrives like a memory rather than an idea. A clarity so complete
              it feels less like discovery and more like recognition — I always
              knew this. I just didn&rsquo;t have the words.
            </p>
            <p>
              That moment of recognition is what we look for in every
              engagement. Everything before it is preparation. Everything after
              it is expression.
            </p>
            <p>
              It doesn&rsquo;t create anything that wasn&rsquo;t already there.
            </p>
            <p>It just turns the light on.</p>
            <p>
              Before we ran it on anyone else — we ran it on ourselves.
            </p>
            <p>The conviction survived: brands are not built. They are extracted.</p>
            <p>
              What came out — unexpectedly, the way true things always arrive —
              was a name.
            </p>
            <p>Spanda.</p>
            <p>
              Sanskrit. Kashmir Shaivism. The primordial vibration — the pulse
              that precedes all form. Not sound. Not light. The impulse that
              makes both possible.
            </p>
            <p>
              We didn&rsquo;t choose it. We recognised it. The way every founder
              recognises their brand when the extraction is done correctly.
            </p>
          </div>

          {/* THE IDENTITY */}
          <div className="mt-16 space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
            <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
              The Identity
            </p>
            <p>Then the framework found our soul.</p>
            <p>Not a values list. A character.</p>
            <p>
              SPANDA listens before it speaks. Questions before it concludes.
              Holds the mirror — showing what is actually there rather than what
              the client hopes is there.
            </p>
            <p>We are not here to make you feel good about your brand.</p>
            <p>We are here to make your brand true.</p>
          </div>

          {/* THE HAND */}
          <div className="mt-16 space-y-8 font-epilogue font-light text-lg md:text-lg text-stone leading-[1.85]">
            <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
              The Hand
            </p>
            <p className="font-caveat text-3xl md:text-3xl text-ink leading-tight">
              The truest things a founder knows about their brand were never typed.
            </p>
            <p>
              They were written — in margins, at midnight, in the moment before
              the idea became a plan.
            </p>
            <p>
              Our headlines are handwritten. Not because warmth is a strategy.
              Because conviction cannot be set in a typeface designed by an
              agency. It lives in the line that moves slightly — that carries
              the weight of the wrist that made it.
            </p>
            <p>
              When you see Caveat on this page you are not seeing a font choice.
            </p>
            <p>
              You are seeing the evidence of a thinking mind, mid-thought,
              committing something to permanence.
            </p>
          </div>

          {/* THE MARK */}
          <div className="mt-16 space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
            <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
              The Mark
            </p>
            <Image
              src="/logos/spanda-light.png"
              alt="SPANDA."
              width={6000}
              height={400}
              style={{ width: "200px", height: "auto", display: "block", marginBottom: "24px" }}
            />
            <p>
              Three things survived when we asked — what is honest, not what is
              beautiful.
            </p>
            <p>
              Ink. Not black. Ink. The colour of conviction written down. Of
              something meant to last — carrying the slight imperfection of the
              hand that made it.
            </p>
            <p>
              Parchment. The surface serious thinking has always chosen. Not
              white. Warm instead. Textured. The colour of something that has
              been used and will be used again.
            </p>
            <p>
              Saffron. Once. Because one truth stated clearly is more powerful
              than ten stated loudly.
            </p>
            <p>And then — the mark.</p>
            <p>A period after the name.</p>
            <p>
              In Kashmir Shaivism the Bindu is the point of infinite potential
              compressed to zero dimension. The singularity before everything
              expanded into form. We placed it after the name. Not as
              punctuation. As philosophy.
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
            <Image
              src="/logos/pravah-light.png"
              alt="PRAVAH"
              width={6000}
              height={884}
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
                Every question we will ask you — we answered honestly before
                asking.
              </p>
              <p>
                What came out is what you see.
              </p>
              <p>
                Nothing borrowed. Nothing performed. Nothing that could belong
                to anyone else.
              </p>
              <p>
                That is the only standard we know how to hold.
              </p>
            </div>
            <p className="font-epilogue font-medium text-[16px] text-saffron mt-10">
              You already know what comes next.
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
