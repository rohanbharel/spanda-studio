"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface NavBarProps {
  theme: "dark" | "light";
  watchHeroLogo?: boolean;
}

export default function NavBar({ theme, watchHeroLogo = false }: NavBarProps) {
  const [logoVisible, setLogoVisible] = useState(!watchHeroLogo);
  const pathname = usePathname();

  useEffect(() => {
    if (!watchHeroLogo) return;
    const heroLogo = document.getElementById("hero-logo");
    if (!heroLogo) return;
    const observer = new IntersectionObserver(
      ([entry]) => setLogoVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroLogo);
    return () => observer.disconnect();
  }, [watchHeroLogo]);

  const linkClass = (href: string) => {
    const isActive = pathname === href;
    const defaultColor = theme === "dark" ? "text-parchment" : "text-ink";
    return `font-epilogue font-medium text-[15px] ${
      isActive ? "text-saffron" : defaultColor
    } hover:text-saffron transition-colors duration-200`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink px-6 py-4 flex items-center justify-between">
      <Link href="/" aria-label="SPANDA. home" className="flex items-center">
        <Image
          src="/logos/spanda-dark.png"
          alt="SPANDA."
          width={6000}
          height={388}
          priority
          className={`h-auto transition-opacity duration-300 w-[160px] md:w-[200px] ${
            logoVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/about" className={linkClass("/about")}>
          Our Story
        </Link>
        <Link href="/framework" className={linkClass("/framework")}>
          Framework
        </Link>
        <Link href="/audit" aria-label="Begin the Brand Strength Audit" className={linkClass("/audit")}>
          Start
        </Link>
      </div>

      {/* Mobile CTA */}
      <Link
        href="/audit"
        aria-label="Begin the Brand Strength Audit"
        className="md:hidden font-epilogue font-medium text-[15px] text-saffron"
      >
        Start →
      </Link>
    </nav>
  );
}
