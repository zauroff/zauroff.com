
"use client"
import Image from "next/image";
import Hero from "./components/hero";
import Loading from "./loading";
import Navbar from "./components/navbar";
import { useState, useEffect, Suspense } from "react";



export default function Home() {




  return (
      <main className="flex flex-col items-center justify-start p-0 relative">
        <Navbar />
        <Hero />

        <div className="bg-noir w-full h-[150vh] mt-[100vh] rounded-t-[90px]">
          <div className="mx-16 mt-32">
            <h2 className="">Under Construction.</h2>
          </div>
        </div>
    </main>
  
  );
}


