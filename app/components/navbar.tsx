"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "./menu";
import { motion } from "framer-motion"

const switchStyles = {
  background: "#f2f2f2",
  borderRadius: "24px", 
  display: "flex",
  gap: "0px",
  position: "relative" as const,
};

export default function Navbar() {
  const [showSwitch, setShowSwitch] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState<'profile' | 'projects'>('profile');

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={
        "fixed top-8 left-1/2 transform -translate-x-1/2 flex md:w-[50%] w-[98%] max-w-[1024px] md:h-16 h-10 md:px-8 px-4 z-20 bg-eggshell border-noir border-2"
      }
    >
      <div className="h-full flex w-full items-center justify-between">
        <h1 className="md:text-4xl text-2xl text-noir align-bottom">zauroff</h1>
        
        <div className="flex relative items-center " style={switchStyles}>
          <motion.div
            layout
            className="absolute bg-noir rounded-full"
            layoutId="switch"
            initial={{opacity : 0}}
            animate={{
              opacity: showSwitch ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
            style={{
              width: '50%',
              height: '100%',
              top: 0,
              left: activeSection === 'profile' ? '0%' : '50%',
              right: activeSection === 'profile' ? '50%' : '0%'
            }}
          />
          <motion.h2 
            onClick={() => {
              setActiveSection("profile");
              setShowSwitch(true);
              
              document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`md:text-sm text-xs relative cursor-pointer z-10 px-6 py-2 transition-colors ${
              !showSwitch ? "text-noir" : (activeSection === "profile" ? "text-eggshell" : "text-noir")}`}
          >
            PROFILE
          </motion.h2>
          <motion.h2
            onClick={() => {
              setActiveSection("projects");
              setShowSwitch(true);

              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`relative md:text-sm text-xs cursor-pointer z-10 px-6 py-2 transition-colors ${
              !showSwitch ? "text-noir" : (activeSection === "projects" ? "text-eggshell" : "text-noir")
            }`}
          >
            PROJECTS
          </motion.h2>
        </div>
      </div>

    </motion.nav>
    
  );
}
{/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-blueberry h-[100vh] w-screen flex justify-center items-center"
    ></motion.div> */}