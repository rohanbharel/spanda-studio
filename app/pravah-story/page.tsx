import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "The PRAVAH Story",
  description:
    "PRAVAH was born from the same framework as SPANDA. The story of a creative entity built on the Brand OS — and the philosophy encoded in its mark.",
  alternates: { canonical: "https://spanda.studio/pravah-story" },
  openGraph: {
    title: "The PRAVAH Story | SPANDA.",
    description:
      "PRAVAH was born from the same framework as SPANDA. The story of a creative entity built on the Brand OS — and the philosophy encoded in its mark.",
    url: "https://spanda.studio/pravah-story",
    type: "website",
  },
};

export default function PravahStoryPage() {
  return (
    <>
      <NavBar theme="dark" />

      <main>

        {/* Ink section — full story */}
        <div className="bg-ink pt-32 pb-24 px-6">
          <div className="max-w-[680px] mx-auto">

            <h1 className="sr-only">PRAVAH</h1>

            {/* Creative label */}
            <p className="font-epilogue font-light text-[14px] uppercase tracking-widest text-stone"
              style={{ marginBottom: "48px" }}>
              Creative
            </p>

            {/* Opening body */}
            <div className="space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-parchment leading-[1.85]">
              <p>
                Most brands know what they are long before the world does.
              </p>
              <p>
                The conviction is present. The positioning is clear. The voice —
                finally, after the extraction — is precise and singular and
                entirely theirs. And then it meets the world. Campaigns that
                could belong to anyone. Content that says the right things in the
                wrong way. Creative that is on-brief but never quite on-brand.
                The gap between what a brand knows about itself and what the
                market actually encounters is where most marketing spend
                disappears.
              </p>
              <p>
                PRAVAH exists in that gap.
              </p>
            </div>

            {/* THE NAME */}
            <div className="mt-16 space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
              <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
                The Name
              </p>
              <p>
                The name is Sanskrit. Flow. Current. The movement of something
                that has found its direction and no longer resists it. Not the
                search — SPANDA handles that. The release into it. There is a
                difference between a brand that is trying to communicate and a
                brand that is simply, finally, moving.
              </p>
              <p>
                PRAVAH makes brands move.
              </p>
            </div>

            {/* THE MARK */}
            <div className="mt-16 space-y-8 font-epilogue font-light text-lg md:text-lg text-stone leading-[1.85]">
              <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
                The Mark
              </p>
              <Image
                src="/logos/pravah-dark.png"
                alt="PRAVAH"
                width={6000}
                height={884}
                style={{ width: "189px", height: "auto", display: "block", marginBottom: "24px" }}
              />
              <p>
                Look at the wordmark.
              </p>
              <p>
                A line runs beneath the letters. It begins at the base of R.
                Between R and A — a Saffron dot. Then the line continues,
                unbroken, to the end of H.
              </p>
              <p>
                That dot is the moment.
              </p>
              <p>
                The precise point where a brand moves from what it is to what it
                does. Where strategy becomes form. Where the Brand OS becomes
                every campaign, every piece of content, every time a stranger
                encounters the brand and recognises something real in it.
              </p>
              <p>
                The line that follows is not just a design choice. It is a
                philosophy. The brand expanding from its point of truth —
                consistently, with direction, without deviation from what it
                actually is. Every campaign. Every piece of content. Every day
                the brand moves in the world. That line is what it looks like.
              </p>
              <p>
                It does not stop at H.
                <br />
                The wordmark shows you where it starts.
              </p>
              <p>
                In Sanskrit, RA — the syllable sitting precisely where the dot
                lives — is the seed sound of fire and transformation. The sound
                that precedes combustion in every tradition that has tried to
                name the moment potential becomes force.
              </p>
              <p>
                Nothing in this identity is accidental.
              </p>
            </div>

            {/* THE WORK */}
            <div className="mt-16 space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
              <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
                The Work
              </p>
              <p>
                PRAVAH works at the direction of the Brand OS — the living
                document SPANDA produces at the end of every extraction. Every
                brief begins there. Every output is held against the same
                question: is this unmistakably this brand?
              </p>
              <p>
                The answer has to be yes.
                <br />
                Or it doesn&rsquo;t leave the room.
              </p>
              <p>
                What makes this possible at scale — across formats, channels,
                and the relentless volume that modern brand presence demands —
                is a creative system built on the Brand OS as its intelligence
                layer. Every campaign runs through it. Consistency is not
                maintained by guidelines on a PDF. It is enforced by the brief
                itself, applied at the point of generation, reviewed by brand
                experts who know the difference between output that is competent
                and output that is true.
              </p>
              <p>
                Not creative that looks good.
                <br />
                Creative that is unmistakably theirs.
              </p>
            </div>

          </div>
        </div>

        {/* Parchment closing section */}
        <section className="bg-parchment py-16 px-6">
          <div className="max-w-[480px] mx-auto text-center">
            <p className="font-epilogue font-light text-[16px] text-stone leading-relaxed">
              PRAVAH is currently in private engagement.
              <br />
              Inquiries are handled through SPANDA.
            </p>
            <Link
              href="/audit"
              className="font-epilogue font-medium text-[16px] text-saffron mt-6 block hover:opacity-80 transition-opacity"
            >
              Begin with the Audit →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
