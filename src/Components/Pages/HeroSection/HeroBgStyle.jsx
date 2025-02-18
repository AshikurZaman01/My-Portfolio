import HeroOrbit from "./HeroOrbit";
import starIcon from "../../../assets/assets/icons/star.svg";
import sparkelIcon from "../../../assets/assets/icons/sparkle.svg";

const HeroBgStyle = () => {
   return (
      <div className="absolute inset-0 flex items-center justify-center ">
         
         {/* Hero Rings */}
         <div className="w-[80vw] h-[80vw] max-w-[620px] max-h-[620px] hero-ring"></div>
         <div className="w-[100vw] h-[100vw] max-w-[820px] max-h-[820px] hero-ring"></div>
         <div className="w-[120vw] h-[120vw] max-w-[1020px] max-h-[1020px] hero-ring"></div>
         <div className="w-[140vw] h-[140vw] max-w-[1220px] max-h-[1220px] hero-ring"></div>

         {/* Rotating Container */}
         <HeroOrbit size={800} rotation={-65}>
            <img src={starIcon} className="invert w-14 md:w-20 lg:w-28" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={490} rotation={20}>
            <img src={starIcon} className="invert w-6 md:w-8 lg:w-12" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={610} rotation={100}>
            <img src={sparkelIcon} className="invert w-4 md:w-5 lg:w-6 opacity-50" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={610} rotation={-20}>
            <img src={sparkelIcon} className="invert w-3 md:w-4 lg:w-5 opacity-50" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={440} rotation={-20}>
            <img src={starIcon} className="invert w-4 md:w-6 lg:w-8 opacity-20" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={460} rotation={150}>
            <img src={starIcon} className="invert w-4 md:w-5 lg:w-6" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={450} rotation={80}>
            <img src={starIcon} className="invert w-4 md:w-5 lg:w-6 opacity-20" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={450} rotation={90}>
            <img src={starIcon} className="invert w-4 md:w-5 lg:w-6 opacity-20" alt="Star Icon" />
         </HeroOrbit>
      </div>
   );
};

export default HeroBgStyle;
