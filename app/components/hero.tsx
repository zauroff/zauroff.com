

export default function Hero(){
  return (
    <>
      <div className="flex flex-col items-center h-[100vh] w-full bg-green-500 z-0 pt-0 relative">
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="relative h-[95vh] w-[95vw] md:h-[90vh] md:w-[90vw]">
            <video 
              src="front_video.mp4"
              autoPlay
              muted
              playsInline
              loop
              className="rounded-[30px] border-2 border-black h-full w-full object-cover shadow-black shadow-md"
            ></video>

            {/* Image positioned inside the video */}
            <img
              src="logo.svg"
              alt="zauroff"
              className="absolute md:-left-4 left-6 bottom-6 opacity-95 h-[80px] w-[300px] md:h-[100px] md:w-[600px] max-h-[100vh]"
            />
          </div>
        </div>
      </div>
    </>
  );
};



// export default function Hero(){
//   return (
//     <>
//       <div className="flex flex-col items-center h-[100vh] w-full bg-green-500 z-0 pt-0">
//         <div className="fixed inset-0 flex justify-center items-center">
//           <video 
//             src="zauroff front page video.mp4"
//             autoPlay
//             muted
//             playsInline
//             loop
//             className="rounded-[30px] border-2 border-black h-[100vh] object-cover md:w-[100vw] md:h-auto"
//           />
//         </div>
//       </div>
//     </>
//   );
// };