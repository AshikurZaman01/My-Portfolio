import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Components/Pages/Home/Home';


const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/',
            element: <Home />,
         }
      ]
   }
])

export default router;