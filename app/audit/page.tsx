import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AuditPageClient from "../components/AuditPageClient";

export const metadata: Metadata = {
  title: "Brand Strength Audit",
  description:
    "A 48-hour brand diagnostic for founders who want to know what their brand is actually doing. ₹35,000. Includes debrief. SPANDA.",
  alternates: { canonical: "https://spanda.studio/audit" },
  openGraph: {
    title: "Brand Strength Audit | SPANDA.",
    description:
      "A 48-hour brand diagnostic for founders who want to know what their brand is actually doing. ₹35,000. Includes debrief. SPANDA.",
    url: "https://spanda.studio/audit",
    type: "website",
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
