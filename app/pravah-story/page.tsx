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
              <p>Friday. 9pm.</p>
              <p>
                T-minus ten days to launch. The agency promised the campaign by
                end of day.
              </p>
              <p>Their email lands.</p>
              <p>You open it.</p>
              <p>Silence.</p>
            </div>

            {/* THE NAME */}
            <div className="mt-16 space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
              <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
                The Name
              </p>
              <p>Not because it&rsquo;s wrong.</p>
              <p>Because it could be anyone&rsquo;s.</p>
              <p>That is the problem PRAVAH exists to solve.</p>
              <p>
                Not the campaign. The distance between what a brand truly is and
                what the world actually receives.
              </p>
              <p>PRAVAH doesn&rsquo;t campaign.</p>
              <p>It expresses.</p>
              <p>
                Every word. Every visual. Every sound. Every touchpoint — an
                extension of the same truth that was extracted. Not interpreted.
                Not adapted. Not diluted.
              </p>
              <p>Extended.</p>
              <p>
                The brand, moving in the world, as itself. Completely.
              </p>
              <p>The name is Sanskrit.</p>
              <p>
                Flow. Current. The movement of something that has found its
                direction and no longer questions it.
              </p>
              <p>We didn&rsquo;t choose it.</p>
              <p>
                We recognised it — the way every true thing in this system
                arrived. Not decided. Discovered.
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
              <p>Look at the wordmark.</p>
              <p>
                A line runs beneath the letters. It begins at the base of R.
                Between R and A — a Saffron dot. Then the line continues,
                unbroken, to the end of H.
              </p>
              <p>That dot is the moment.</p>
              <p>
                The precise point where strategy becomes expression. Where the
                Brand OS — everything SPANDA extracted — becomes the first
                campaign. The first piece of content.
              </p>
              <p>
                In Sanskrit RA — sitting precisely where the dot lives — is the
                seed syllable of fire and transformation.
              </p>
              <p>The line that follows is the brand in the world.</p>
              <p>
                Every day. Every touchpoint. Expanding from that single point of
                truth — without deviation.
              </p>
            </div>

            {/* THE WORK */}
            <div className="mt-16 space-y-8 font-epilogue font-light text-[16px] md:text-[18px] text-stone leading-[1.85]">
              <p className="font-epilogue font-semibold text-[11px] uppercase tracking-widest text-stone">
                The Work
              </p>
              <p>Every brief begins with the Brand OS.</p>
              <p>Every output is held against one question:</p>
              <p>Is this unmistakably this brand?</p>
              <p>The answer has to be yes.</p>
              <p>Or it doesn&rsquo;t leave the room.</p>
            </div>

          </div>
        </div>

        {/* Parchment closing section */}
        <section className="bg-parchment py-16 px-6">
          <div className="max-w-[480px] mx-auto text-center">
            <p className="font-epilogue font-light text-[18px] text-ink leading-relaxed">
              SPANDA extracts.
              <br />
              PRAVAH expresses.
            </p>
            <p className="font-epilogue font-light text-[16px] text-stone leading-relaxed mt-4">
              Every word. Every sound. Every visual.
              <br />
              One brand. Completely itself. Every time.
            </p>
            <Link
              href="https://pravah.agency"
              className="font-epilogue font-medium text-[16px] text-saffron mt-6 block hover:opacity-80 transition-opacity"
            >
              pravah.agency →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
