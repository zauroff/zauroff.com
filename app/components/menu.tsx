"use client"

import { useState, useEffect } from "react"
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import {motion} from 'framer-motion'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className=" right-4 z-50 text-white rounded-full focus:outline-none transform transition-transform duration-100 ease-in-out"
      >
        <div className="relative w-8 h-8">
        <MdClose
                className={`absolute w-8 h-8 transition-opacity transform duration-150  ${
                isOpen ? 'opacity-100' : 'opacity-0'
                }`}
            />
            <HiMenuAlt4
                className={`relative w-8 h-8 transition-opacity transform duration-150 ${
                isOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
        </div>
      </button>

      {/* Sliding Menu */}
      <div className={`fixed inset-0 h-[100vh] w-screen bg-noir transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0 ' : 'translate-x-[100vw]'} z-30 overflow-hidden`}>
        <section className="grid h-screen place-content-center gap-2">
            <FlipLink href="/about">About</FlipLink>
            <FlipLink href="/work">Work</FlipLink>
            <FlipLink href="/contact">Contact</FlipLink>


        </section>
      </div>
    </>
  );
}


function FlipLink({children, href} : {children:string, href:string}) {
  return (
    <motion.a 
      initial="initial"
      whileHover="hovered"
      whileTap="tapped"
      href = {href}
      className="relative block overflow-hidden whitespace-nowrap md:text-7xl text-6xl font-black uppercase"
    >
      <motion.div
        variants={{
          initial: {y: 0},
          hovered: {y: "-100%"},
          tapped: {y: "-100%"}
        }}
      >
        {children}
      </motion.div>

      {/* secondary motion div to get the animation working, this will be hidden initially */}
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: {y: "100%"},
          hovered: {y: 0},
          tapped: {y: 0}
        }}
      >
        {children}
      </motion.div>
    </motion.a>

  );

}