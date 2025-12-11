import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
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
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://use.typekit.net/csn8rgm.css"/>
      </head>
      <body>
            <main className=" bg-black px-4 md:px-16 ">
              {children}
              <Analytics />
            </main>
      </body>
    </html>
  );
}
