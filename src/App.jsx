import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Create a router
const router=createBrowserRouter([
{
      path:"/",
      element:<h1>Hello,World!!</h1>
},{
      path:"/about",
      element:<h1>About us</h1>
},{
      path:"/contact",
      element:<h1>Contact Us</h1>
},{
      path:"/services",
      element:<h1>Our Services</h1>
},{
      path:"/products",
      element:<h1>Our Products</h1>
}
]);

const App=()=>{
      //Wrap the app with the RouterProvider
      return <RouterProvider router={router} />
}
export default App;