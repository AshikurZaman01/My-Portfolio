import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Links = ({ items }) => {
   return (
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>

         <NavLink
            to={items.path}
            className={({ isActive }) =>
               `nav-items ${isActive ? "bg-white/20 text-white shadow-md" : ""}`
            }
         >
            {items.name}
         </NavLink>

      </motion.li>
   );
};

export default Links;
