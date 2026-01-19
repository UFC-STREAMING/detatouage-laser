import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/ui/StickyCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.detatouage-laser.fr"),
  title: {
    default: "Détatouage Laser - Retrait de Tatouage par Laser en France",
    template: "%s | Détatouage Laser",
  },
  description:
    "Spécialiste du retrait de tatouage par laser. Technologie de pointe, résultats optimaux. Devis gratuit partout en France.",
  keywords: [
    "détatouage",
    "retrait tatouage",
    "laser tatouage",
    "enlever tatouage",
    "effacer tatouage",
  ],
  authors: [{ name: "Détatouage Laser" }],
  creator: "Détatouage Laser",
  publisher: "Détatouage Laser",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Détatouage Laser",
    title: "Détatouage Laser - Retrait de Tatouage par Laser",
    description: "Spécialiste du retrait de tatouage par laser en France",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <StickyCTA />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
