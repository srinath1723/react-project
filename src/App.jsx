import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";

//Create a router
const router=createBrowserRouter([
{
      path:"/",
      element:<Home />
},{
      path:"/register",
      element:<Register />
},{
      path:"/login",
      element:<Login />
}
]);

const App=()=>{
      //Wrap the app with the RouterProvider
      return <RouterProvider router={router} />
}
export default App;