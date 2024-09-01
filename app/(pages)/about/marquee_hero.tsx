import { motion, useScroll, useTransform } from 'framer-motion';


function MarqueeLeft() {
    const { scrollY } = useScroll();
    const x = useTransform(scrollY, [0, 1000], ['-50vw', '0vw']); // Moves left to right

    return (
        <div className="space-y-10 overflow-hidden">
            <div className="relative overflow-hidden">
                <motion.h1 className="whitespace-nowrap text-3xl" style={{ x, willChange: 'transform' }}>
                    about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. 
                </motion.h1>
            </div>
        </div>
    );
}

function MarqueeRight() {
    const { scrollY } = useScroll();
    const x = useTransform(scrollY, [0, 1000], ['0vw', '-75vw']); // Moves right to left

    return (
        <div className="space-y-10 overflow-hidden">
            <div className="relative overflow-hidden">
                <motion.h1 className="whitespace-nowrap md:text-8xl text-6xl" style={{ x }}>
                about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. about me. 
                </motion.h1>
            </div>
        </div>
    );
}

export default function MarqueeHero() {
    return (
        <div className=''>
            <MarqueeLeft />
            <MarqueeRight />
            <MarqueeLeft />
        </div>
    );
}
