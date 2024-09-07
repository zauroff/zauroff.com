"use client";
import { useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Navbar from "@/app/components/navbar";
import WorkComponent from "./workComponent";

export default function Work() {
    return (
        <>
          <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="bg-blueberry h-[100vh] w-screen flex justify-center items-center"
            >
    
                <div className="">
                    <h2 className="md:text-7xl text-4xl">work</h2>
                    
                    {/* software projects */}
                    <div className="mt-10">
                        <h3 className="">Software Projects</h3>
                        
                        {/* north street creative */}
                        <a
                        className="flex justify-between md:text-4xl text-2xl w-[75vw] transition-colors duration-500 hover:bg-eggshell group" // Add "group" here
                        href="work/northstreet-creative"
                        >
                            <p className="transition-colors duration-500 group-hover:text-blueberry">North Street Creative</p>
                        
                            <p className="italic transition-colors duration-500 group-hover:text-blueberry">software</p>
                        </a>


                        {/* stemkasa */}
                        <a
                        className="flex justify-between md:text-4xl text-2xl w-[75vw] transition-colors duration-500 hover:bg-eggshell group" // Add "group" here
                        href="work/stemkasa"
                        >
                            <p className="transition-colors duration-500 group-hover:text-blueberry">STEMKasa</p>
                        
                            <p className="italic transition-colors duration-500 group-hover:text-blueberry">software</p>
                        </a>


                        {/* gridiron */}
                        <a
                        className="flex justify-between md:text-4xl text-2xl w-[75vw] transition-colors duration-500 hover:bg-eggshell group" // Add "group" here
                        href="work/gridiron"
                        >
                            <p className="transition-colors duration-500 group-hover:text-blueberry">Gridiron</p>
                        
                            <p className="italic transition-colors duration-500 group-hover:text-blueberry">software</p>
                        </a>

                    </div>


                    {/* design projects */}
                    <div className="mt-10">
                        <h3 className="">Design Projects</h3>

                        {/* lexington league */}
                        <a
                        className="flex justify-between md:text-4xl text-2xl w-[75vw] transition-colors duration-500 hover:bg-eggshell group" // Add "group" here
                        href="work/lexington-league"
                        >
                            <p className="transition-colors duration-500 group-hover:text-blueberry">Lexington League</p>
                        
                            <p className="italic transition-colors duration-500 group-hover:text-blueberry">design</p>
                        </a>

                        {/* chicken wing club */}
                        {/* <a
                        className="flex justify-between md:text-4xl text-2xl w-[75vw] transition-colors duration-500 hover:bg-eggshell group" // Add "group" here
                        href="work/chicken"
                        >
                            <p className="transition-colors duration-500 group-hover:text-blueberry">Chicken Wing Club</p>
                        
                            <p className="italic transition-colors duration-500 group-hover:text-blueberry">design</p>
                        </a> */}



                        <a
                        className="flex justify-between md:text-4xl text-2xl w-[75vw] transition-colors duration-500 hover:bg-eggshell group" // Add "group" here
                        href="work/kappa-sigma"
                        >
                            <p className="transition-colors duration-500 group-hover:text-blueberry">Kappa Sigma Fraternity</p>
                        
                            <p className="italic transition-colors duration-500 group-hover:text-blueberry">design</p>
                        </a>

                        <a
                        className="flex justify-between md:text-4xl text-2xl w-[75vw] transition-colors duration-500 hover:bg-eggshell group" // Add "group" here
                        href="work/personal"
                        >
                            <p className="transition-colors duration-500 group-hover:text-blueberry">Personal Passion Projects</p>
                        
                            <p className="italic transition-colors duration-500 group-hover:text-blueberry">design</p>
                        </a>


                    </div>
    
                    
                </div>
            </motion.div>
    
        </>
      );
}
