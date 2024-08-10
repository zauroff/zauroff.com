import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-0 relative">
      <Hero></Hero>
      
      {/* <div className="bg-black h-[100vh] relative w-full">
        Content for the black div
      </div> */}
    </main>
  );
}
