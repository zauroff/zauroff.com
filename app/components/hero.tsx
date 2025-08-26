"use client";

import { easeOut, motion } from "framer-motion";
import ChromaticText from "./chromatic-text";
export default function Hero() {
  return (
    <>
      <motion.div
        className="h-[100vh] w-full flex text-5xl justify-center items-center md:justify-start overflow-x-hidden max-w-full"
        initial={{ borderRadius: "50%", opacity: 0 }}
        animate={{ borderRadius: "0", opacity: 1 }}
        transition={{ duration: 1, ease: easeOut }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-left"
        >
              <h1>Howdy, I&apos;m</h1>
              <h1>Dan Zauroff</h1>
              <h2 className="text-2xl md:text-4xl font-normal">
                software engineer
              </h2>

        </motion.div>
      </motion.div>
    </>
  );
}
