import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AuditPageClient from "../components/AuditPageClient";

export const metadata: Metadata = {
  title: "Brand Strength Audit",
  description:
    "The Brand Strength Audit — a 7-day brand audit for founders who want to know exactly what their brand is doing. ₹35,000. Includes debrief. SPANDA.",
  alternates: { canonical: "https://spanda.studio/audit" },
  openGraph: {
    title: "Brand Strength Audit | SPANDA.",
    description:
      "The Brand Strength Audit — a 7-day brand audit for founders who want to know exactly what their brand is doing. ₹35,000. Includes debrief. SPANDA.",
    url: "https://spanda.studio/audit",
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

export default function AuditPage() {
  return (
    <>
      <NavBar theme="dark" />
      <AuditPageClient />
      <Footer />
    </>
  );
}
