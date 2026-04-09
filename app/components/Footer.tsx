import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-ink px-6 pt-8 pb-4"
      style={{ borderTop: "1px solid rgba(216,209,196,0.2)" }}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Two columns — desktop: items-end justify-between | mobile: stacked centred */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left gap-10">

          {/* Left — SPANDA */}
          <div className="flex flex-col items-center md:items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/spanda-dark.png"
              alt="SPANDA."
              style={{ width: "200px", height: "auto" }}
            />
            <p className="font-epilogue font-light text-[13px] text-stone mt-2">
              Brand Strategy &amp; Identity
            </p>
            <p className="font-epilogue font-light text-[13px] text-stone mt-1">
              spanda.studio
            </p>
            <Link
              href="/about"
              className="md:hidden font-epilogue font-light text-[13px] text-stone hover:text-parchment transition-colors mt-2"
            >
              Our Story →
            </Link>
          </div>

          {/* Right — PRAVAH */}
          <div className="flex flex-col items-center md:items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/pravah-dark.png"
              alt="PRAVAH"
              style={{ width: "145px", height: "auto" }}
            />
            <p className="font-epilogue font-light text-[13px] text-stone mt-2">
              Creative
            </p>
            <Link
              href="https://pravah.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="font-epilogue font-light text-[13px] text-stone hover:text-parchment transition-colors mt-1"
            >
              pravah.agency →
            </Link>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-7 pt-4 pb-4 text-center">
          <p className="font-epilogue font-light text-[12px] text-stone">
            © 2026 SPANDA. All rights reserved.
          </p>
          <p className="font-epilogue font-light text-[12px] text-stone mt-1">
            <Link
              href="mailto:hello@spanda.studio"
              className="hover:text-parchment transition-colors"
            >
              hello@spanda.studio
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
