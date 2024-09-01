
"use client"
import Image from "next/image";
import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import { useState, useEffect, Suspense } from "react";
import Loading from "@/app/loading";
import { motion } from "framer-motion";


export default function Contact() {


  return (
    <main className="flex flex-col items-center justify-start p-0 relative">
      <Navbar/>
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="bg-blueberry h-[100vh] w-screen flex justify-center items-center"
        >

            <div className="">
                <h2 className="md:text-7xl text-4xl">feel free to say hi</h2>

                <div className="flex justify-between md:mt-8 mt-4">
                    <div className="text-left relative">
                        <a className="md:text-4xl text-xl">email:</a>
                        <br/>
                        <a className="md:text-4xl text-xl">github:</a>
                        <br/>
                        <a className="md:text-4xl text-xl">linkedin:</a>
                        <br/>
                    </div>
                    <div className="text-right relative">
                        <a className="md:text-4xl text-xl" href="mailto:dannyzny@gmail.com" target="_blank">dannyzny@gmail.com</a>
                        <br/>
                        <a className="md:text-4xl text-xl" href="https://github.com/zauroff" target="_blank">github.com/zauroff</a>
                        <br/>
                        <a className="md:text-4xl text-xl" href="https://www.linkedin.com/in/zauroff/" target="_blank">linkedin.com/in/zauroff</a>
                        <br/>
                    </div>
                </div>
            </div>
        </motion.div>

    </main>
  );
}