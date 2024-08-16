"use client"
import { useState, useEffect } from "react";



export default function Hero(){
  
  
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200); // Delay to ensure the effect is visible
  }, []);


  return (
    <>
      <div className="fixed bg-blueberry h-[100vh] w-full flex text-5xl font-bold justify-center items-center md:justify-start overflow-x-hidden max-w-full -z-10">
        <div className={` px-4 md:px-16 flex flex-col text-center md:text-left 
          transform transition-transform duration-1000 ease-in-out ${isLoaded ? 'translate-x-0 ' : '-translate-x-[200vw]'}`}>
          <h1>Howdy, I'm Dan</h1>
          <h1 className="text-2xl md:text-4xl font-bold">developer & designer</h1>
        </div>

      </div>
    </>
  );
};


