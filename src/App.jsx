import { Outlet } from "react-router-dom"
import Header from "./Components/Pages/Header/Header"

const App = () => {
  return (
    <div className="bg-gray-900 text-white antialiased ">
      <Header></Header>

      <Outlet></Outlet>

    </div>
  )
}

export default App