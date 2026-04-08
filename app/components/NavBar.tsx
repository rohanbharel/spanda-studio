"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const heroLogo = document.getElementById("hero-logo");
    if (!heroLogo) return;

    const observer = new IntersectionObserver(
      ([entry]) => setLogoVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(heroLogo);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink px-6 py-4 flex items-center justify-between">
      {/* Logo — fades in once hero logo scrolls out of view */}
      <Link href="/" aria-label="SPANDA. home" className="flex items-center">
        <Image
          src="/logos/spanda-dark.png"
          alt="SPANDA."
          height={28}
          width={112}
          className={`h-7 w-auto transition-opacity duration-300 ${logoVisible ? "opacity-100" : "opacity-0"}`}
          priority
        />
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/work" className="font-epilogue text-sm text-stone hover:text-parchment transition-colors">
          Work
        </Link>
        <Link href="/framework" className="font-epilogue text-sm text-stone hover:text-parchment transition-colors">
          Framework
        </Link>
        <Link href="/start" className="font-epilogue text-sm text-stone hover:text-parchment transition-colors">
          Start
        </Link>
      </div>

      {/* Mobile CTA */}
      <Link href="/start" className="md:hidden font-epilogue text-sm text-saffron border border-saffron px-4 py-2">
        Start →
      </Link>
    </nav>
  );
}
