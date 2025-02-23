import img1 from '../../../assets/assets/images/memoji-avatar-1.png'
import img2 from '../../../assets/assets/images/memoji-avatar-2.png'
import img3 from '../../../assets/assets/images/memoji-avatar-3.png'
import img4 from '../../../assets/assets/images/memoji-avatar-4.png'
import img5 from '../../../assets/assets/images/memoji-avatar-5.png'
import Header from './Header'
import Card from './Card'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {

   const data = [
      {
         id: 1,
         name: 'John Doe',
         position: 'CEO',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
         avatar: img1
      },
      {
         id: 2,
         name: 'Jane Doe',
         position: 'CTO',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
         avatar: img2
      },
      {
         id: 3,
         name: 'Steve Jobs',
         position: 'Founder',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
         avatar: img3
      },
      {
         id: 4,
         name: 'Bill Gates',
         position: 'CEO',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
         avatar: img4
      },
      {
         id: 5,
         name: 'Elon Musk',
         position: 'CEO',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
         avatar: img5
      },
   ]

   return (
      <div className='py-16 relative'>
         <div className='container mx-auto px-4'>
            <Header />

            <Swiper
               modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
               spaceBetween={24}
               slidesPerView={1}
               autoplay={{  
                  delay: 3000,
                  disableOnInteraction: false,
               }}
               breakpoints={{
                  640: { slidesPerView: 1.2 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2.5 },
                  1280: { slidesPerView: 3 }
               }}
               pagination={{ clickable: true, el: '.swiper-pagination' }}
               mousewheel
               keyboard
               className='mt-12'
            >
               {data.map((item) => (
                  <SwiperSlide key={item.id}>
                     <Card>
                        <div className='bg-gray-800 rounded-3xl p-6 relative overflow-hidden h-full'>
                           <div className='flex items-center gap-4'>
                              <div className='size-14 bg-gray-700 rounded-full flex items-center justify-center'>
                                 <img src={item.avatar} alt={item.name} className='w-3/4 h-3/4 object-contain' />
                              </div>
                              <div className='flex flex-col text-sm font-calistoga tracking-widest'>
                                 <div className='capitalize font-semibold'>{item.name}</div>
                                 <div className='text-gray-500'>{item.position}</div>
                              </div>
                           </div>
                           <div className='mt-4 text-gray-300'>{item.text}</div>
                        </div>
                     </Card>
                  </SwiperSlide>
               ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className='flex justify-center mt-8 space-x-2 swiper-pagination' />
         </div>
      </div>
   )
}

export default Testimonial