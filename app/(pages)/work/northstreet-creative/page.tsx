"use client"

import { motion } from 'framer-motion'
import Link from 'next/link';



export default function NorthStreetCreativePage(){

    return (
      <>

      {/* Hero */}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="bg-[#231F20]  h-screen w-screen flex items-center justify-center shadow-lg shadow-zinc-900 z-10"
      >
          <img src="/work_assets/northstreet-creative/logo.svg" alt="Lexington League Logo" className='md:w-[35vw] w-[50vw]' />
      </motion.div>


      {/* project details */}
      <motion.div
          className="bg-noir relative w-full">
          <div className="md:mx-16 mx-6 py-36 justify-center items-center place-content-center">
            <div className="mb-16">
              <h2 className="md:text-7xl text-4xl mb-2">internship details</h2>
              <p className="md:text-3xl text-xl "><i>North Street Creative</i> is a branding and design agency with a focus on financial services, professional services, healthcare and non profits. As a Software Engineer Intern, I was tasked with reengineering the North Street Creative website using Next.js on the frontend and headless WordPress on the backend, ultimately increasing performance by 20%.   </p>

            </div>

            <div className='flex justify-between'>
              <h3 className='md:text-2xl text-xl'>Tools Used:</h3>
              <p className='md:text-2xl text-xl'>Next.js, React, Typescript, Apollo GraphQL</p>
            </div>

            <a href='https://northstreetcreative.com/' target='_blank' className='flex flex-col justify-center items-center mt-20'>
                <img  src='/work_assets/northstreet-creative/homepage_snapshot.png' alt="North Street Creative Home Page" className='w-[100vw]'></img>
            </a>
          </div>
        </motion.div>

      
      </>);
};