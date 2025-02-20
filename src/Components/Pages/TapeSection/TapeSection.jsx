import starIcon from '../../../assets/assets/icons/star.svg'

const TapeSection = () => {

   const words = [
      "Performant",
      "Accessible",
      "Secure",
      "Interactive",
      "Scalable",
      "User Friendly",
      "Responsive",
      "Maintainable",
      "Search Optimized",
      "Usable",
      "Realiable"
   ]

   const duplicatedWords = [...words, ...words];

   return (
      <div className='py-16 lg:py-24'>
         <div className='bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3'>
            <div
               className="flex"
               style={{
                  maskImage: "linear-gradient(to right, transparent, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent)",
               }}
            >

               <div
                  className='flex flex-none gap-4 py-3'
                  style={{
                     animation: 'marquee 40s linear infinite',
                  }}
               >
                  {duplicatedWords.map((word, index) => (
                     <div key={index} className='inline-flex items-center gap-4'>
                        <span className='text-gray-900 uppercase text-sm'>{word}</span>
                        <img src={starIcon} className="w-6 h-6 invert-0 -rotate-12" alt="Star Icon" />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}


export default TapeSection