"use client"

import { useState, useEffect } from "react"
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

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
        <div className="flex flex-col h-screen justify-center items-center px-8">
            <h1>Work</h1>
            <h1>Design</h1>
            <h1>Contact</h1>

        </div>
      </div>
    </>
  );
}
