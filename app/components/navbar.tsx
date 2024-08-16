import Link from "next/link"
import { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "./menu";


export default function Navbar() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
        setIsLoaded(true);
        }, 100); // Delay to ensure the effect is visible
    }, []);
    
    return (
        <nav
      className={`flex fixed justify-between items-center left-0 w-full h-16 px-8 md:px-16 md:pt-16 pt-20 z-20
        transform transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
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
        </nav>
    );
};