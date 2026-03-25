import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/ui/StickyCTA";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.tatouage-temporaire.fr"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  title: {
    default: "Détatouage Laser - Retrait de Tatouage par Laser en France",
    template: "%s | Détatouage Laser",
  },
  description:
    "Spécialiste du retrait de tatouage par laser. Technologie de pointe, résultats optimaux. Devis gratuit partout en France.",
  keywords: [
    "détatouage",
    "détatouage laser",
    "retrait tatouage",
    "enlever tatouage",
    "effacer tatouage",
    "laser tatouage",
    "retrait tatouage laser",
    "enlever tatouage laser",
    "suppression tatouage",
    "détatouage France",
    "centre détatouage",
    "spécialiste détatouage",
    "laser Q-Switched",
    "détatouage Q-Switch",
    "technologie laser tatouage",
    "prix détatouage",
    "prix détatouage laser",
    "devis détatouage",
    "devis gratuit détatouage",
    "tarif détatouage",
    "combien coute détatouage",
    "détatouage Paris",
    "détatouage Lyon",
    "détatouage Marseille",
    "détatouage Toulouse",
    "détatouage Nice",
  ],
  authors: [{ name: "Détatouage Laser" }],
  creator: "Détatouage Laser",
  publisher: "Détatouage Laser",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Détatouage Laser",
    title: "Détatouage Laser - Retrait de Tatouage par Laser",
    description: "Spécialiste du retrait de tatouage par laser en France",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Détatouage Laser France - Spécialiste du retrait de tatouage par laser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Détatouage Laser - Retrait de Tatouage par Laser",
    description: "Spécialiste du retrait de tatouage par laser en France. Devis gratuit.",
    images: ["/images/og-image.jpg"],
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
      <body className={`${dmSans.variable} ${dmSerif.variable} ${dmSans.className}`}>
        <Navbar />
        <StickyCTA />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
