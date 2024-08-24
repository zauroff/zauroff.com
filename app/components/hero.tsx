"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber";
import Stars from "./3d/stars";
import StarsMobile from "./3d/starsMobile";

export default function Hero(){
  
  return (
    <>
      <motion.div 
        className="fixed bg-gradient-to-tl from-blueberry to-black h-[100vh] w-full flex text-5xl font-bold justify-center items-center md:justify-start overflow-x-hidden max-w-full -z-10"
        initial={{borderRadius:'50%', opacity:0}}
        animate={{ borderRadius:'0px', opacity:1 }}
        transition={{ duration: .5, ease: "easeOut" }}
      >

        {/* Desktop: Visible on screens md and up */}
        <Canvas className="fixed top-0 left-0 w-full h-full -z-30 md:block hidden">
          <Stars />
        </Canvas>

        {/* Mobile: Visible on screens below md */}
        <Canvas className="fixed top-0 left-0 w-full h-full -z-30 md:hidden">
          <StarsMobile />
        </Canvas>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="fixed px-4 md:px-16 flex flex-col text-center md:text-left "
        >
          <h1>Howdy, I&apos;m Dan</h1>
          <h1 className="text-2xl md:text-4xl font-bold">developer & designer</h1>
        </motion.div>

      </motion.div>
    </>
  );
};


