"use client"
import { useState, useEffect } from "react";
import { easeOut, motion } from "framer-motion"
import { Canvas } from "@react-three/fiber";
import StarsStatic from "@/app/components/3d/starsStatic";
import Navbar from "@/app/components/navbar";
import MarqueeHero from "./marquee_hero";

export default function About(){
  
  return (
    <>
      <Navbar/>
      <motion.div 
        className="fixed top-0 bg-black h-[100vh] w-full flex text-5xl font-bold justify-start items-center md:justify-start overflow-x-hidden max-w-full -z-10">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="">
        
          <MarqueeHero/>
        </motion.div>

      </motion.div>

        <div className="relative bg-noir w-full h-screen mt-[100vh]">
          <div className="mx-32 pt-32 justify-center items-center place-content-center">
            <img src="construction.png" width={500}></img>
          </div>
        </div>
      
      

    </>
  );
};


