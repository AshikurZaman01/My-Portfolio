import image from '../../../assets/assets/images/memoji-computer.png'
import ArrowDown from '../../../assets/assets/icons/arrow-down.svg'
import { motion } from "framer-motion";

import HeroBgImage from './HeroBgImage';
import HeroBgStyle from './HeroBgStyle';


const HeroSection = () => {
   return (
      <div className=" py-32 md:py-36 lg:py-40 relative z-0 overflow-x-clip">

         <HeroBgImage />

         <HeroBgStyle />


         <div className="container mx-auto">

            <div className='flex  flex-col items-center'>
               <img src={image} alt="" className='size-[100px]' />

               <div className='bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                  <motion.div
                     className="bg-green-500 size-2.5 rounded-full"
                     animate={{ scale: [1, 1.5, 1] }}
                     transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className='text-sm font-semibold'>Available for new projects</div>
               </div>
            </div>

            <div className='max-w-lg mx-auto'>
               <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
               <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize in transforming designs into functional, high-performing web applications. Lets discuss your next project.</p>
            </div>


            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center"
            >
               {/* Explore My Work Button */}
               <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
               >
                  <span className="font-semibold text-white">Explore My Work</span>
                  <motion.img
                     src={ArrowDown}
                     alt="Arrow Down"
                     className="w-4 h-4 filter invert brightness-200"
                     animate={{ y: [0, 5, 0] }}
                     transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  />
               </motion.button>

               {/* Let's Connect Button */}
               <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
               >
                  <motion.span
                     animate={{ rotate: [0, 10, 0] }}
                     transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}>
                     👋
                  </motion.span>
                  <span className="font-semibold">Let's Connect</span>
               </motion.button>
            </motion.div>

         </div>

      </div>
   )
}

export default HeroSection