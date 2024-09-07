"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "./menu";
import { motion } from "framer-motion"

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollY === 0) {
        // If the user is at the top of the page, always show the navbar
        setShowNavbar(true);
      } else if (scrollY < pageHeight * 0.1) {
        // If the user is within the top 10% of the page, show the navbar
        setShowNavbar(true);
      } else if (scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setShowNavbar(false);
      } else {
        // If scrolling up, show the navbar
        setShowNavbar(true);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={`flex fixed justify-between items-center left-0 w-full h-16 px-8 md:px-16 md:pt-16 pt-20 z-20 transition-opacity duration-300 ${
        showNavbar ? "opacity-100" : "opacity-0"
      }`}
    >
      <a href="/">
        <Image
          src="/logo.svg"
          alt="zauroff"
          width={128}
          height={80}
          sizes="(max-width: 768px) 100px, 200px"
          className="relative z-50"
        />
      </a>
      <Menu />
    </motion.nav>
  );
}
{/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-blueberry h-[100vh] w-screen flex justify-center items-center"
    ></motion.div> */}