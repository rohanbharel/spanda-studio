import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About the Work",
  description:
    "SPANDA. extracts the brand that already exists inside every founder. Brand strategy and identity consultancy. Delhi, India.",
  alternates: { canonical: "https://spanda.studio/about" },
  openGraph: {
    title: "About the Work | SPANDA.",
    description:
      "SPANDA. extracts the brand that already exists inside every founder. Brand strategy and identity consultancy. Delhi, India.",
    url: "https://spanda.studio/about",
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

          {/* Opening scene — italic */}
          <div className="mt-10 font-epilogue font-light italic text-[16px] md:text-[18px] text-ink leading-[1.85] space-y-4">
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
          </div>

          {/* Scene → philosophy pause */}
          <div className="mt-14 font-epilogue font-light text-[16px] md:text-[18px] text-ink leading-[1.85] space-y-4">
            <p>
              What happened in that room wasn&rsquo;t a failure of creativity,
              budget, execution — or your capability to judge. It was something
              quieter and more fundamental.
            </p>
            <p>Nobody asked the right question first.</p>
          </div>

          {/* THE NAME */}
          <div className="mt-16 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
            <p className="mt-5">SPANDA came out of that silence.</p>
            <p className="mt-5">
              Out of the conviction that every founder already carries their
              brand completely formed inside them — before the product launch,
              before the pitch deck, before the agency arrives with forty slides
              and three directions.
            </p>
            <p className="mt-5">
              The brand exists the moment a founder decides something needs to
              exist in the world that doesn&rsquo;t yet. That moment of
              decision — raw, unformed, entirely certain — that is the brand.
            </p>
            <p className="mt-5">Everything after is simply making it visible.</p>

            <p className="mt-8">From that conviction came a philosophy.</p>

            <p className="mt-5">
              If brands already exist inside founders — then the agency&rsquo;s
              job is not just to be creative. It is to be rigorous. Patient. Honest
              enough to keep asking until the truth surfaces.
            </p>
            <p className="mt-5">
              The true answer always feels different from the practiced one. It
              arrives like a memory rather than an idea. A clarity so complete
              it feels less like discovery and more like recognition — I always
              knew this. I just didn&rsquo;t have the words.
            </p>
            <p className="mt-5">
              That moment of recognition is what we look for in every
              engagement. Everything before it is preparation. Everything after
              it is expression.
            </p>
            <p className="mt-5">
              It doesn&rsquo;t create anything that wasn&rsquo;t already there.
            </p>
            <p className="mt-5">It just turns the light on.</p>

            <p className="mt-8">
              Before we ran it on anyone else — we ran it on ourselves.
            </p>
            <p className="mt-5">
              The conviction survived: brands are not built. They are extracted.
            </p>
            <p className="mt-5">
              What came out — unexpectedly, the way true things always arrive —
              was a name.
            </p>
            <p className="mt-5">Spanda.</p>
            <p className="mt-5">
              Sanskrit. Kashmir Shaivism. The primordial vibration — the pulse
              that precedes all form. Not sound. Not light. The impulse that
              makes both possible.
            </p>
            <p className="mt-5">
              We didn&rsquo;t choose it. We recognised it. The way every founder
              recognises their brand when the extraction is done correctly.
            </p>
          </div>

          {/* THE IDENTITY */}
          <div className="mt-16 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
            <p className="mt-8">Then the framework found our soul.</p>
            <p className="mt-5">Not a values list. A character.</p>
            <p className="mt-5">
              SPANDA listens before it speaks. Questions before it concludes.
              Holds the mirror — showing what is actually there rather than what
              the client hopes is there.
            </p>
            <p className="mt-5">
              We are not here to make you feel good about your brand.
            </p>
            <p className="mt-5">We are here to make your brand true.</p>
          </div>

          {/* THE HAND */}
          <div className="mt-16 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
            <p className="font-epilogue font-light text-[16px] md:text-[18px] text-ink mt-10 leading-[1.85]">
              The truest things a founder knows about their brand were never typed.
            </p>
            <p className="font-caveat text-[28px] text-ink mt-4 leading-tight">
              They were written — in margins, at midnight, in the moment before
              the idea became a plan.
            </p>
            <p className="mt-5">
              Our headlines are handwritten. Not because warmth is a strategy.
              Because conviction cannot be contained in a typeface selected from
              a menu. It lives in the line that moves slightly — that carries
              the weight of the wrist that made it.
            </p>
            <p className="mt-5">
              When you see Caveat on this page you are not seeing a font choice.
            </p>
            <p className="mt-4">
              You are seeing the evidence of a thinking mind, mid-thought,
              committing something to permanence.
            </p>
          </div>

          {/* THE MARK */}
          <div className="mt-16 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
            <Image
              src="/logos/spanda-light.png"
              alt="SPANDA."
              width={6000}
              height={400}
              style={{ width: "200px", height: "auto", display: "block", marginTop: "24px", marginBottom: "24px" }}
            />

            <p className="mt-8">
              Three things survived when we asked — what is honest, not what is
              beautiful.
            </p>

            {/* Tight list — Ink / Parchment / Saffron */}
            <div className="mt-6 space-y-3">
              <p>
                <span className="font-epilogue font-semibold text-ink">Ink.</span>{" "}
                Not black. Ink. The colour of conviction written down. Of
                something meant to last — carrying the slight imperfection of the
                hand behind it.
              </p>
              <p>
                <span className="font-epilogue font-semibold text-stone">Parchment.</span>{" "}
                The surface serious thinking has always chosen. Not white. Warm
                instead. Textured. The colour of something that has been used and
                will be used again.
                Every journal that ever held a conviction worth keeping has turned this colour.
              </p>
              <p>
                <span className="font-epilogue font-semibold text-saffron">Saffron.</span>{" "}
                Once. Because one truth stated clearly is more powerful than ten
                stated loudly.
              </p>
            </div>

            <p className="mt-8">And then — the mark.</p>
            <p className="mt-4">A period after the name</p>

            <p className="mt-5">
              <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#C97820', marginRight: '8px', verticalAlign: 'middle' }} />In Kashmir Shaivism the Bindu is the point of infinite potential
              compressed to zero dimension. The singularity before everything
              expanded into form. We placed it after the name. Not as
              punctuation. As philosophy.
            </p>
            <p className="mt-5">
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
            <Link
              href="/audit"
              className="font-epilogue font-medium text-[16px] text-saffron block mt-8 hover:opacity-80 transition-opacity"
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
