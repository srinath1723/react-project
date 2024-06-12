import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Todos from "./Components/Todos";
import {loader as usersLoader} from "./Components/Todos";
const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Todos />,
      loader: usersLoader
  }
  ])
  return <RouterProvider router={router} />
    
  
}

export default App
