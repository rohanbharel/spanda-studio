import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPANDA. — Brand Strategy & Identity",
  description: "Your brand is already there. We extract the one you already have.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
