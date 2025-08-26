import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import CRTOverlay from "./components/crt-overlay";
import { Analytics } from "@vercel/analytics/react"




export const metadata: Metadata = {
  title: "zauroff",
  description: "daniel zauroff - portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/csn8rgm.css"/>
      </head>
      <body>
          <CRTOverlay>
            <main className="bg-strawberry px-4 md:px-16">
              <Navbar/>
              {children}
              <Analytics />
            </main>
          </CRTOverlay>
      </body>
    </html>
  );
}
