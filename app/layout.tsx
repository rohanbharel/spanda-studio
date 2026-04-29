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
    title: "SPANDA. — Brand Strategy & Identity",
    description: "Every brand is already there. We draw it out.",
    images: [
      {
        url: "/logos/OG%20Spanda.png",
        width: 1200,
        height: 630,
        alt: "SPANDA. — Brand Strategy & Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logos/OG%20Spanda.png"],
  },
  verification: {
    google: "waXurWBUoTfOLwufytj7sUkCNK6rAYHv59PSE2PKbIs",
  },
  icons: {
    icon: "/logos/Spanda Favicon ink.png",
    apple: "/logos/Spanda Favicon ink.png",
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
        <link rel="preload" href="/fonts/caveat-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/epilogue-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="icon" href="/logos/Spanda Favicon ink.png" type="image/png" sizes="16x16" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
