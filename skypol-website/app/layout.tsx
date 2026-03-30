import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skypol Arts & Media – Fotografie, Design & Social Media",
  description:
    "Full-Service-Kreativagentur für Fotografie, Grafikdesign und digitales Marketing. Wir machen Ihre Marke sichtbar.",
  openGraph: {
    title: "Skypol Arts & Media",
    description: "Fotografie · Design · Social Media",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f5f5] antialiased">
        {children}
      </body>
    </html>
  );
}
