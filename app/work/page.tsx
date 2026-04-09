import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Work",
  description: "Client work — coming soon. SPANDA. brand strategy and identity.",
  alternates: { canonical: "https://spanda.studio/work" },
  robots: { index: false, follow: false },
};

export default function WorkPage() {
  return (
    <>
      <NavBar theme="light" />
      <main className="min-h-screen bg-parchment flex flex-col items-center justify-center px-6 text-center">
        <Image
          src="/logos/spanda-dark.png"
          alt="SPANDA."
          width={160}
          height={48}
          className="w-[160px] h-auto"
          priority
        />
        <h1 className="font-epilogue font-light text-[18px] text-stone mt-8">
          Coming soon.
        </h1>
        <Link
          href="/"
          className="font-epilogue font-light text-[14px] text-ink hover:text-saffron transition-colors mt-6"
        >
          ← Back
        </Link>
      </main>
      <Footer />
    </>
  );
}
