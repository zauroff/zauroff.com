"use client"

import { motion } from 'framer-motion'




export default function StemKasaPage(){

    return (
      <>

      {/* Hero */}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="bg-[#4e1ca6]  h-screen w-screen flex items-center justify-center shadow-lg shadow-zinc-900 z-10"
      >
          <h2>STEMKasa</h2>
      </motion.div>


      {/* project details */}
      <motion.div
          className="bg-noir relative w-full">
          <div className="md:mx-16 mx-6 py-36 justify-center items-center place-content-center">
            <div className="mb-16">
              <h2 className="md:text-7xl text-4xl mb-2">internship details</h2>
              <p className="md:text-3xl text-xl "><i>STEMKasa</i> is a pre-seed online game-based learning platform aimed at K-12 students. During my internship, I was tasked with integrating OpenAI’s API to enable students to create custom chatbots with features like image generation, image recognition, text-to-speech, and speech-to-text. My role involved developing both the backend using Flask, Python, MongoDB, and Node.js, and the frontend using React. Collaborating with two other interns on this specific integration, I contributed to a broader team effort that included integrating other LLM models such as Google’s Gemini, Mistral, LLaMA 3, and Claude.</p>

            </div>

            <div className='flex justify-between'>
              <h3 className='md:text-2xl text-xl'>Tools Used:</h3>
              <p className='md:text-2xl text-xl'>Flask, React, Node.js, MongoDB</p>
            </div>

          </div>
        </motion.div>

      
      </>);
};