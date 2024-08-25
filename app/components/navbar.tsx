import Link from "next/link"
import Image from "next/image";
import Menu from "./menu";
import { motion } from "framer-motion";

export default function Navbar() {

    return (
        <motion.nav
        className='flex fixed justify-between items-center left-0 w-full h-16 px-8 md:px-16 md:pt-16 pt-16 z-20'
        initial={{opacity:0 }}
        animate={{opacity:1}}
        transition={{duration:1}}
        >
        <Link href="/">
            <Image
            src="logo.svg"
            alt="zauroff"
            width={128}
            height={80}
            sizes="(max-width: 768px) 100px, 200px"
            className="relative z-50"
            />
        </Link>
        <Menu />
        </motion.nav>
    );
};