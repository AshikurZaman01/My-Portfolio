import HeroOrbit from "../About/HeroOrbit";
import starIcon from "../../../assets/assets/icons/star.svg"
import sparkelIcon from "../../../assets/assets/icons/sparkle.svg"

const HeroBgStyle = () => {
   return (
      <div className="">
         {/* Hero Rings */}
         <div className="size-[620px] hero-ring"></div>
         <div className="size-[820px] hero-ring"></div>
         <div className="size-[1020px] hero-ring"></div>
         <div className="size-[1220px] hero-ring"></div>


         {/* Rotating Container */}
         <HeroOrbit size={800} rotation={-65}>
            <img src={starIcon} className="invert size-28" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={490} rotation={20}>
            <img src={starIcon} className="invert size-12" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={610} rotation={100}>
            <img src={sparkelIcon} className="invert size-6 opacity-50" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={610} rotation={-20}>
            <img src={sparkelIcon} className="invert size-5 opacity-50" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={440} rotation={-20}>
            <img src={starIcon} className="invert size-8 opacity-20" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={460} rotation={150}>
            <img src={starIcon} className="invert size-6" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={450} rotation={80}>
            <img src={starIcon} className="invert size-6 opacity-20" alt="Star Icon" />
         </HeroOrbit>

         <HeroOrbit size={450} rotation={90}>
            <img src={starIcon} className="invert size-6 opacity-20" alt="Star Icon" />
         </HeroOrbit>


      </div>
   )
}

export default HeroBgStyle;
