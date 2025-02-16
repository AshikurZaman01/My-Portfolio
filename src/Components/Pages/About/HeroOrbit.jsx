import starIcon from '../../../assets/assets/icons/star.svg'


const HeroOrbit = ({ children, size, rotation }) => {
   return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                             ">

         < div className='' style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
         }}>

            {/* Spinning Star */}
            <div className=" inline-flex " style={{ transform: `rotate($rotation * -1)deg` }}>
               {children}
            </div >

         </div >
      </div>
   )
}

export default HeroOrbit

