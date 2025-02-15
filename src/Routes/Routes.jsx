import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Components/Pages/Home/Home';
import Projects from '../Components/Pages/Projects/Projects';
import About from '../Components/Pages/About/About';
import Contact from '../Components/Pages/Contact/Contact';


const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/projects',
            element: <Projects />,
         },
         {
            path: '/about',
            element: <About />,
         },
         {
            path: '/contact',
            element: <Contact />,
         }
      ]
   }
])

export default router;