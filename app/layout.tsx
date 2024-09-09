import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";




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
        <main className="flex flex-col items-center justify-start p-0 relative">
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
