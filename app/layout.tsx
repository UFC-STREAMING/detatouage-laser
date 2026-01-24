import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.tatouage-temporaire.fr"),
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/logo.png",
  },
  title: {
    default: "Détatouage Laser - Retrait de Tatouage par Laser en France",
    template: "%s | Détatouage Laser",
  },
  description:
    "Spécialiste du retrait de tatouage par laser. Technologie de pointe, résultats optimaux. Devis gratuit partout en France.",
  keywords: [
    // Mots-clés principaux
    "détatouage",
    "détatouage laser",
    "retrait tatouage",
    "enlever tatouage",
    "effacer tatouage",
    "laser tatouage",
    // Mots-clés secondaires
    "retrait tatouage laser",
    "enlever tatouage laser",
    "suppression tatouage",
    "détatouage France",
    "centre détatouage",
    "spécialiste détatouage",
    // Termes techniques
    "laser Q-Switched",
    "détatouage Q-Switch",
    "technologie laser tatouage",
    // Intentions de recherche
    "prix détatouage",
    "prix détatouage laser",
    "devis détatouage",
    "devis gratuit détatouage",
    "tarif détatouage",
    "combien coute détatouage",
    // Localisations générales
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
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
