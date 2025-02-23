import grainImage from '../../../assets/assets/images/grain.jpg'

const Card = ({ children }) => {
   return (
      <div className="relative z-0 overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
         <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-6 md:p-8 after:pointer-events-none">
            <div
               className='absolute inset-0 opacity-5 -z-10 transition-opacity duration-300 group-hover:opacity-10'
               style={{ backgroundImage: `url(${grainImage})` }}
            />
            {children}
         </div>
      </div>
   );
};

export default Card