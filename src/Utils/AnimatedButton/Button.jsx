import arrowUp from "../../assets/assets/icons/arrow-up-right.svg"
import { motion } from "framer-motion";

const Button = ({ text }) => {
   return (
      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
         <span>{text}</span>
         <motion.img
            src={arrowUp}
            className="size-4"
            alt=""
            animate={{ y: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
         />
      </button>
   )
}  

export default Button