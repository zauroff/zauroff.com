import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 z-10 relative">
      <div className="mt-[25vh] h-32">
        
      </div>
      <div className="flex justify-center items-center h-[100vh] w-full bg-green-500 -z-10 fixed top-1 pt-20">
        <img src="Zauroff Website Hero.png" className="w-full md:max-w-[40vw]" alt="Hero" />
      </div>
    </main>
  );
}
