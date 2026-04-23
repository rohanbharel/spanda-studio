import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "The PRAVAH Story",
  description:
    "PRAVAH was born from the same framework as SPANDA. The story of a creative entity built on the Brand OS — and the philosophy encoded in its mark.",
  keywords: [
    "AI creative agency India",
    "brand campaign agency Delhi",
    "AI brand campaigns India",
    "creative agency for founders",
    "brand content agency India",
    "AI marketing agency Delhi",
  ],
  alternates: { canonical: "https://spanda.studio/pravah-story" },
  openGraph: {
    title: "The PRAVAH Story | SPANDA.",
    description:
      "PRAVAH was born from the same framework as SPANDA. The story of a creative entity built on the Brand OS — and the philosophy encoded in its mark.",
    url: "https://spanda.studio/pravah-story",
    type: "website",
    images: [
      {
        url: "/logos/OG%20Pravah.png",
        width: 2400,
        height: 1260,
        alt: "PRAVAH — The brand, moving in the world, as itself.",
      },
    ],
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

            <h1 className="sr-only">The PRAVAH Story — Creative Agency by SPANDA.</h1>

            {/* Creative label */}
            <p
              className="font-epilogue font-light text-[14px] uppercase tracking-widest text-stone"
              style={{ marginBottom: "48px" }}
            >
              Creative
            </p>

            {/* Opening scene — italic */}
            <div className="font-epilogue font-light italic text-[16px] md:text-[18px] text-parchment leading-[1.4]">
              <p>Friday. 9pm.</p>
              <p className="mt-3">
                T-minus ten days to launch. The agency promised the campaign by
                end of day.
              </p>
              <p className="mt-3">Their email lands.</p>
              <p className="mt-3">You open it.</p>
              <p className="mt-3">Silence.</p>
            </div>

            {/* Scene → philosophy — largest pause */}
            <div
              className="font-epilogue font-light italic text-[16px] md:text-[18px] text-stone"
              style={{ marginTop: "56px" }}
            >
              <p style={{ lineHeight: "1.4" }}>Not because it&rsquo;s wrong.</p>
              <p className="mt-3" style={{ lineHeight: "1.4" }}>
                Because it could be anyone&rsquo;s.
              </p>
            </div>

            {/* Philosophy begins — regular weight */}
            <div
              className="font-epilogue font-light text-[16px] md:text-[18px] text-stone"
              style={{ marginTop: "56px", lineHeight: "1.75" }}
            >
              <p>That is the problem PRAVAH exists to solve.</p>
              <p className="mt-6">
                Not the campaign. The distance between what a brand truly is and
                what the world actually receives.
              </p>

              <p className="mt-12" style={{ lineHeight: "1.4" }}>
                PRAVAH doesn&rsquo;t campaign.
              </p>
              <p className="mt-3" style={{ lineHeight: "1.4" }}>
                It expresses.
              </p>
              <p className="mt-6" style={{ lineHeight: "1.75" }}>
                Every word. Every visual. Every sound. Every touchpoint — an
                extension of the same truth that was extracted. Not interpreted.
                Not adapted. Not diluted.
              </p>
              <p className="mt-3" style={{ lineHeight: "1.4" }}>
                Extended.
              </p>
              <p className="mt-6" style={{ lineHeight: "1.75" }}>
                The brand, moving in the world, as itself. Completely.
              </p>
            </div>

            {/* PRAVAH name introduction */}
            <div
              className="font-epilogue font-light text-[16px] md:text-[18px] text-stone"
              style={{ marginTop: "48px", lineHeight: "1.75" }}
            >
              <p
                className="font-epilogue font-semibold text-saffron"
                style={{ display: "block", marginBottom: "16px" }}
              >
                PRAVAH.
              </p>
              <p>The name is Sanskrit.</p>
              <p className="mt-6">
                Flow. Current. The movement of something that has found its
                direction and no longer questions it.
              </p>

              <p className="mt-6" style={{ lineHeight: "1.4" }}>
                We didn&rsquo;t choose it.
              </p>
              <p className="mt-3" style={{ lineHeight: "1.75" }}>
                We recognised it — the way every true thing in this system
                arrived. Not decided. Discovered.
              </p>
            </div>

            {/* The Mark */}
            <div
              className="font-epilogue font-light text-[16px] md:text-[18px] text-stone"
              style={{ marginTop: "48px", lineHeight: "1.75" }}
            >
              <Image
                src="/logos/pravah-dark.png"
                alt="PRAVAH"
                width={6000}
                height={884}
                style={{ width: "189px", height: "auto", display: "block", marginBottom: "24px" }}
              />
              <p style={{ lineHeight: "1.4" }}>Look at the wordmark.</p>
              <p className="mt-6" style={{ lineHeight: "1.75" }}>
                A line runs beneath the letters. It begins at the base of R.
                Between R and A — a Saffron dot. Then the line continues,
                unbroken, to the end of H.
              </p>
              <p className="mt-6" style={{ lineHeight: "1.4" }}>
                That dot is the moment.
              </p>
              <p className="mt-6" style={{ lineHeight: "1.75" }}>
                The precise point where strategy becomes expression. Where the
                Brand OS — everything SPANDA extracted — becomes the first
                campaign. The first piece of content.
              </p>
              <p className="mt-6" style={{ lineHeight: "1.75" }}>
                In Sanskrit RA — sitting precisely where the dot lives — is the
                seed syllable of fire and transformation.
              </p>
              <p className="mt-6" style={{ lineHeight: "1.4" }}>
                The line that follows is the brand in the world.
              </p>
              <p className="mt-3" style={{ lineHeight: "1.75" }}>
                Every day. Every touchpoint. Expanding from that single point of
                truth — without deviation.
              </p>
            </div>

            {/* The Work */}
            <div
              className="font-epilogue font-light text-[16px] md:text-[18px] text-stone"
              style={{ marginTop: "48px", lineHeight: "1.75" }}
            >
              <p>Every brief begins with the Brand OS.</p>
              <p className="mt-6">
                Every output is held against one question:
              </p>
              <p className="mt-3" style={{ lineHeight: "1.4" }}>
                Is this unmistakably this brand?
              </p>
              <p className="mt-6" style={{ lineHeight: "1.4" }}>
                The answer has to be yes.
              </p>
              <p className="mt-3" style={{ lineHeight: "1.4" }}>
                Or it doesn&rsquo;t leave the room.
              </p>
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
