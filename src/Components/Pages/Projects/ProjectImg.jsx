import React from 'react'

const ProjectImg = ({ image, title }) => {
   return (
      <div className="mt-8 -mb-4 md:-mb-0 relative mx-auto w-full max-w-[800px] ">

         <div className="relative w-full h-[200px] md:h-[450px] bg-gray-900 rounded-t-xl shadow-2xl border-8 border-gray-900 overflow-hidden">

            <div className="absolute inset-0 flex items-center justify-center">

               <div className="absolute top-2 w-16 h-2 bg-gray-900 rounded-full"></div>

               <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover rounded-sm"
               />
            </div>
         </div>

         <div className="relative h-6 mx-auto w-[92%] bg-gray-900">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-800 rounded-t-sm"></div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-gradient-to-t from-gray-800 to-gray-900 rounded-b-xl shadow-lg"></div>
         </div>
      </div>
   )
}

export default ProjectImg