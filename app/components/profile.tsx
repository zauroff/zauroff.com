import { motion } from "framer-motion"


export default function Profile() {

    return (
        <motion.div 
        id="profile"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{opacity:0, y: -10}}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: .5 }}
        className="flex flex-col md:py-20 py-8 overflow-hidden min-h-screen"
        >

            <h2 className="pt-24 md:text-5xl text-3xl font-black">about me</h2>

            <div className="md:mt-24 mt-8 flex md:flex-row flex-col gap-16">
                {/* <div className="flex justify-center">
                    <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] overflow-hidden rounded-xl border-eggshell border-4">
                    <Image
                        src="/headshot.jpg"
                        alt="headshot"
                        layout="fill"
                        objectFit="cover"
                    />
                    </div>
                </div> */}

                <div className="flex-1 md:mt-0 mt-8 max-w-[1024px]">
                    <h3 className=" md:text-4xl text-2xl">i like making things</h3>
                    <p className=" md:text-3xl text-xl mt-2">
                    i’m a computer science student and software engineer who loves building things that leave an impact. i thrive on creative problem solving and enjoy tackling challenges at every level, from backend infrastructure to sleek frontends. i’ve led teams, collaborated with designers and engineers, and worked on projects that push me to think outside the box.
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
                        </ul>
                    </div>
                    <div className="">
                        <h3 className=" md:text-4xl text-2xl">what i want to learn</h3>
                        <ul className="mt-2">
                            <li>Go</li>
                            <li>Ruby on Rails</li>
                            <li>React Native</li>
                        </ul>
                    </div>
                </div>

            </div>
            

        </motion.div>
    )
};