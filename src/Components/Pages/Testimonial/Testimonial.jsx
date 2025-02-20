import img1 from '../../../assets/assets/images/memoji-avatar-1.png'
import img2 from '../../../assets/assets/images/memoji-avatar-2.png'
import img3 from '../../../assets/assets/images/memoji-avatar-3.png'
import img4 from '../../../assets/assets/images/memoji-avatar-4.png'
import img5 from '../../../assets/assets/images/memoji-avatar-5.png'
import Header from './Header'

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
      <div>

         <Header />
       
         <div>
            {
               data.map((item) => (
                  <div key={item.id}>
                     <img src={item.avatar} alt={item.name} />
                     <div>{item.name}</div>
                     <div>{item.position}</div>
                     <div> {item.text}</div>
                  </div>
               ))
            }
         </div>

      </div>
   )
}

export default Testimonial