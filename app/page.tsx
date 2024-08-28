
"use client"
import Image from "next/image";
import Hero from "./components/hero";
import Loading from "./loading";
import Navbar from "./components/navbar";
import { useState, useEffect, Suspense } from "react";



export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {~
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return (
      <main className="flex flex-col items-center justify-center p-0 h-screen">
        <Loading />
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-start p-0 relative">
      <Navbar/>
      <Hero />
    </main>
  );
}