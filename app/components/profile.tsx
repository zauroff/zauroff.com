import { motion } from "framer-motion";
import ChromaticText from "./chromatic-text";
export default function Profile() {
  return (
    <motion.div
      id="profile"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:py-20 py-8 overflow-hidden min-h-screen"
    >

        <h2 className="pt-24 md:text-5xl text-3xl font-black">about me</h2>
        <div className="md:mt-24 mt-8 flex md:flex-row flex-col gap-16">
          <div className="flex-1 md:mt-0 mt-8 max-w-[1024px]">
            <h3 className=" md:text-4xl text-2xl">i like making things</h3>
            <p className=" md:text-3xl text-xl mt-2">
              i am a fullstack software engineer based in nyc with a strong
              focus on building impactful UIs. to me, there is no greater
              freedom than building something from the ground up, transforming
              ideas into products people genuinely enjoy using. with experience
              spanning engineering, leadership, and design, i thrive at the
              intersection of technology and creativity.
            </p>
          </div>
          <div className="flex gap-8 md:mt-0 mt-6 max-w-[1024px] ">
            <div className="">
              <h3 className=" md:text-4xl text-2xl">tools i use</h3>
              <ul className="mt-2">
                <li>Typescript</li>
                <li>Python</li>
                <li>Next.JS</li>
                <li>React</li>
                <li>Tailwindcss</li>
                <li>Go</li>
                <li>React Native</li>
              </ul>
            </div>
          </div>
        </div>

    </motion.div>
  );
}
