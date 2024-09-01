"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "./menu";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide navbar (set opacity to 0)
        setShowNavbar(false);
      } else {
        // If scrolling up, show navbar (set opacity to 100)
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
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
    </nav>
  );
}
