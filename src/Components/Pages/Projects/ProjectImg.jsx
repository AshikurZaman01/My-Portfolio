import React from "react";

const ProjectImg = ({ image, title }) => {
   return (
      <div className="group relative mx-auto mt-8 w-full max-w-[900px] overflow-hidden rounded-xl transition-transform duration-300">

         <div className="relative mx-auto w-[95%] h-auto md:h-[320px] rounded-xl border-[14px] border-gray-900 bg-gray-900 shadow-2xl shadow-gray-900/60 pb-6">

            <div className="absolute -top-[2px] left-1/2 h-6 w-[110%] -translate-x-1/2 rounded-t-lg bg-gray-900 flex items-center justify-center">

               <div className="h-2 w-14 rounded-b-md bg-gray-800 flex items-center justify-center">
                  <div className="h-[3px] w-[6px] rounded-full bg-gray-600/80"></div>
               </div>

            </div>

            <div className="relative w-full aspect-[16/10] md:h-[270px] overflow-hidden rounded-lg border border-gray-800 bg-gray-900">

               <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
               />

               <div className="absolute inset-0 pointer-events-none">

                  <div className="h-full w-full animate-screen-reflect bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]">
                  </div>

               </div>
            </div>

            <div className="absolute bottom-0 left-1/2 w-[85%] h-5 -translate-x-1/2 bg-gray-800 rounded-b-lg shadow-md shadow-gray-900/60"></div>
         </div>
      </div>
   );
};

export default ProjectImg;
