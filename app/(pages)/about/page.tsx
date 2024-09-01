"use client"
import { useState, useEffect } from "react";
import { easeOut, motion, useTransform, useScroll } from "framer-motion";
import Navbar from "@/app/components/navbar";
import MarqueeHero from "./marquee_hero";

export default function About() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.10, 0.80, 0.9],
    ["#000000", "#1b38e2", "#1b38e2", "#000000"]
  );

  return (
    <>
      <Navbar />
      
      {/* Sticky Section */}

      <div className="relative w-full h-[200vh]">
        <motion.div
          className="sticky top-0 h-[100vh] w-full flex text-5xl font-bold justify-start items-center md:justify-start overflow-x-hidden max-w-full"
          style={{ backgroundColor }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className=""
          >
            <MarqueeHero />
          </motion.div>
        </motion.div>
      </div>
      {/* Content after Sticky Section */}



      <motion.div style={{backgroundColor}}>
        <div className="  w-full h-screen flex justify-center items-center px-16">
          <h2 className="sticky top-[50vh] text-center md:text-6xl text-4xl">my name is dan zauroff</h2>
        </div>
        <div className="  w-full h-screen flex justify-center items-center px-16">
          <h2 className="sticky top-[50vh] text-center md:text-6xl text-4xl">i make stuff</h2>
        </div>
      
        {/* main info section */}
        <motion.div
          className="relative w-full mt-32"
          style={{ backgroundColor }}>
          <div className="md:mx-16 mx-6 pt-36 justify-center items-center place-content-center">
            <div className="mb-16">
              <h2 className="md:text-7xl text-4xl mb-2">some info</h2>
              <p className="md:text-5xl text-xl ">Born and raised in Queens, I&apos;m currently pursuing a B.S. in Computer Science at Baruch College. With over three years of programming &amp; two years of design experience, I&apos;m passionate about crafting innovative solutions that fuse technology &amp; creativity</p>
            </div>

            <div className="mb-16">
              <h2 className="md:text-7xl text-4xl mb-2">experience</h2>
              
              <h3 className="md:text-5xl mb-1">North Street Creative - Software Engineer Intern</h3>
              <p className="mb-4 md:text-4xl">Re-engineered the main website using Next.js, TypeScript, and GraphQL to enhance performance and user experience</p>
            
              <h3 className="md:text-5xl mb-1">StemKASA - Software Engineer Intern</h3>
              <p className="mb-4 md:text-4xl">Integrated OpenAI’s technology into the platform, implementing features like voice chat, image generation, and chatbots using Python and Flask</p>

              <h3 className="md:text-5xl mb-1">Baruch College - Graphic Designer</h3>
              <p className="mb-4 md:text-4xl">Designed and produced a wide range of marketing materials and social media content for Baruch&apos;s Welcome Center, contributing to the college&apos;s visual identity and outreach efforts</p>
            
            </div>

          </div>
        </motion.div>
      </motion.div>

    </>
  );
}
