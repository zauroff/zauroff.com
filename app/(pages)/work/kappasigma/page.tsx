"use client"

import { motion } from 'framer-motion'





export default function KappaSigmaPage(){

    return (
      <>

      {/* Hero */}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="bg-black  h-screen w-screen flex items-center justify-center shadow-lg shadow-zinc-900"
      >
          <img src="/work_assets/kappasigma/Kappa Sigma Logo Updated.png" alt="Lexington League Logo" className='md:w-[35vw] w-[50vw]' />
      </motion.div>


      {/* project details */}
      <motion.div
          className="bg-noir relative w-full -z-10">
          <div className="md:mx-16 mx-6 py-36 justify-center items-center place-content-center">
            <div className="mb-16">
              <h2 className="md:text-7xl text-4xl mb-2">project details</h2>
              <p className="md:text-3xl text-xl ">As the former President and one of the founding members of the <i>Kappa Sigma Upsilon Chi</i> chapter, I took the role of being the chapter’s graphic designer. Throughout my three years with the fraternity, I was responsible for creating logos, social media content, merchandise, and designs for our rush calendar. Building the chapter’s branding from scratch was both challenging and rewarding, culminating in the design of a logo that has become a lasting emblem of the chapter.</p>

            </div>

            <div className='flex justify-between'>
              <h3 className='md:text-2xl text-xl'>Tools Used:</h3>
              <p className='md:text-2xl text-xl'>Adobe Photoshop, Adobe Illustrator</p>
            </div>

            <div className='flex flex-col justify-center items-center mt-20'>
                <h3>some of my favorites</h3>
                <img src='/work_assets/kappasigma/some_calendars.png' className='w-[100vw]'></img>
                
            </div>
          </div>
        </motion.div>
      
      </>);
};