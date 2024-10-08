
"use client"
import Image from "next/image";
import Hero from "./components/hero";
import Loading from "./loading";
import Navbar from "./components/navbar";
import { useState, useEffect, Suspense } from "react";



export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Prevent touchmove to disable scrolling on iOS
    const preventScroll = (e : TouchEvent) => e.preventDefault();
    document.addEventListener('touchmove', preventScroll, { passive: false });


    const timer = setTimeout(() => {~
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return (

      <Loading />

    );
  }

  return (
      <>
        <Navbar/>
        <Hero />
      </>

  );
}