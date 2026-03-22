import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { Providers } from "./providers";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.tatouage-temporaire.fr"),
  title: "Détatouage Laser en France : Spécialistes Certifiés",
  description: "Technologie laser de dernière génération pour un retrait efficace et sécurisé de vos tatouages",
  keywords: ["détatouage", "laser", "tatouage", "retrait tatouage"],
  openGraph: {
    title: "Détatouage Laser en France",
    description: "Technologie laser de dernière génération",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/Accueil-detatouage.webp",
        width: 1200,
        height: 630,
        alt: "Détatouage Laser - Spécialiste du retrait de tatouage en France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Détatouage Laser en France",
    description: "Technologie laser de dernière génération",
    images: ["/images/Accueil-detatouage.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <OrganizationSchema />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
