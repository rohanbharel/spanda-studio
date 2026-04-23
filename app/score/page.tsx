import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScoreForm from "../components/ScoreForm";

export const metadata: Metadata = {
  title: "Brand Dimension Analysis",
  description:
    "Choose one dimension. Tell us about your brand. Receive a strategic analysis from SPANDA. — next business day, reviewed before it reaches you.",
  alternates: { canonical: "https://spanda.studio/score" },
  openGraph: {
    title: "Brand Dimension Analysis | SPANDA.",
    description:
      "Choose one dimension. Tell us about your brand. Receive a strategic analysis from SPANDA. — next business day, reviewed before it reaches you.",
    url: "https://spanda.studio/score",
    type: "website",
    images: [
      {
        url: "/logos/OG%20Spanda.png",
        width: 2400,
        height: 1260,
        alt: "SPANDA. — Brand Strategy & Identity",
      },
    ],
  },
};

export default function ScorePage() {
  return (
    <>
      <NavBar theme="dark" />
      <main>
        <ScoreForm />
      </main>
      <Footer />
    </>
  );
}
