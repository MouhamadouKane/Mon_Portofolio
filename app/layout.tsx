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
  title: "Mouhamadou Kane — Data Analyst & Business Analyst à Lille",
  description:
    "Découvrez le portfolio de Mouhamadou Kane : projets Power BI, analyse de données, reporting et Business Intelligence au service de la décision.",
  applicationName: "Portfolio de Mouhamadou Kane",
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
