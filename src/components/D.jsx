import { useContext, useEffect } from "react";
import { NameContext } from "../App";

const D = ({children}) => {
    const {name,setName}=useContext(NameContext);
    useEffect(()=>{
      setTimeout(()=>{
        setName("srinath sp");
      },5000);
    }
  )
    return <div>
        <h1>hello , {name}!</h1>
        {children}
    </div>
}

export default D
