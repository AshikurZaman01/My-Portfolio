import grainImage from '../../../assets/assets/images/grain.jpg'


const HeroBgImage = () => {
   return (
      <div className='absolute inset-0 -z-30 opacity-5'
         style={{
            backgroundImage: `url(${grainImage})`
         }}>
      </div>
   )
}

export default HeroBgImage