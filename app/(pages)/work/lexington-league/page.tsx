"use client"

import { motion } from 'framer-motion'





export default function LexingtonLeaguePage(){

    return (
      <>

      {/* Hero */}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="bg-[#0661b4]  h-screen w-screen flex items-center justify-center shadow-lg shadow-zinc-900"
      >
          <img src="/work_assets/lexington_league/Lexington League Logo.png" alt="Lexington League Logo" className='md:w-[35vw] w-[50vw]' />
      </motion.div>


      {/* project details */}
      <motion.div
          className="bg-noir relative w-full -z-10">
          <div className="md:mx-16 mx-6 py-36 justify-center items-center place-content-center">
            <div className="mb-16">
              <h2 className="md:text-7xl text-4xl mb-2">project details</h2>
              <p className="md:text-3xl text-xl ">As part of a branding initiative for the <i>Lexington League</i>, a team of student ambassadors for CUNY Baruch College Undergraduate Admissions, I led the rebranding effort to modernize their visual identity. This project involved designing a new logo, creating cohesive branding materials for social media, and producing event assets for in-house and public-facing communications. </p>

            </div>

            <div className='flex justify-between'>
              <h3 className='md:text-2xl text-xl'>Tools Used:</h3>
              <p className='md:text-2xl text-xl'>Adobe Photoshop, Adobe Illustrator</p>
            </div>

            <div className='flex flex-col justify-center items-center mt-20'>
              <img src='/work_assets/lexington_league/Lexington-League---Color.png' className='w-[100vw]'></img>
              <img src='/work_assets/lexington_league/Lexington-League---Typeface.png' className='w-[100vw]'></img>
              <img src='/work_assets/lexington_league/Lexington-League---Logos.png' className='w-[100vw]'></img>
              <img src='/work_assets/lexington_league/Lexington-League---Back.png' className='w-[100vw]'></img>
            </div>
          </div>
        </motion.div>
      
      </>);
};