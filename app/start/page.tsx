import Image from "next/image";
import Link from "next/link";

export default function StartPage() {
  return (
    <main className="min-h-screen bg-ink flex flex-col items-center justify-center px-6 text-center">
      <Image
        src="/logos/spanda-dark.png"
        alt="SPANDA."
        width={160}
        height={48}
        className="w-[160px] h-auto"
        priority
      />
      <p className="font-epilogue font-light text-[18px] text-stone mt-8">
        Coming soon.
      </p>
      <Link
        href="/"
        className="font-epilogue font-light text-[14px] text-stone hover:text-parchment transition-colors mt-6"
      >
        ← Back
      </Link>
    </main>
  );
}
