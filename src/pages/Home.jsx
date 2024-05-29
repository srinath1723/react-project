
import {Outlet} from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Welocome to our website</h1>
      <p>please register</p> 
      

      <Outlet />
      
         </div>
  )
}

export default Home
