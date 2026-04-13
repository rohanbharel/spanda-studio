import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SPANDA. — Brand Strategy & Identity",
    template: "%s | SPANDA.",
  },
  description:
    "SPANDA. is a brand strategy and identity consultancy for founders who want to find what their brand already is. Delhi, India.",
  metadataBase: new URL("https://spanda.studio"),
  openGraph: {
    siteName: "SPANDA.",
    type: "website",
  },
  verification: {
    google: "waXurWBUoTfOLwufytj7sUkCNK6rAYHv59PSE2PKbIs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SPANDA.",
    url: "https://spanda.studio",
    description:
      "Brand strategy and identity consultancy. We extract the brand that is already there.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@spanda.studio",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
