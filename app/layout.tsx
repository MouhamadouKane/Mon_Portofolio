import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

// ✅ Import du composant Analytics
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mouhamadou-kane.vercel.app"),
  title: "Mouhamadou Kane | Data Analyst · Data Scientist · Expert Power BI",
  description:
    "3 ans d’expérience data dans le transport chez SNCF Voyageurs et Keolis. Power BI, Python et machine learning. Disponible immédiatement.",
  applicationName: "Portfolio de Mouhamadou Kane",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Portfolio de Mouhamadou Kane",
    title: "Mouhamadou Kane | Data Analyst · Data Scientist · Expert Power BI",
    description:
      "3 ans d’expérience data chez SNCF Voyageurs et Keolis. Power BI, Python et machine learning. Disponible immédiatement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mouhamadou Kane | Data Analyst · Data Scientist · Expert Power BI",
    description:
      "3 ans d’expérience data chez SNCF Voyageurs et Keolis. Power BI, Python et machine learning. Disponible immédiatement.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f7f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {/* ✅ Analytics placé ici */}
        <Analytics />
      </body>
    </html>
  );
}
