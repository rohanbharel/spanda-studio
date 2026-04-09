import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SPANDA. — Brand Strategy & Identity",
    template: "%s | SPANDA.",
  },
  description:
    "Your brand is already there. We extract the one you already have. Brand strategy and identity consultancy India.",
  metadataBase: new URL("https://spanda.studio"),
  openGraph: {
    siteName: "SPANDA.",
    type: "website",
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
