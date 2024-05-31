import { useContext, useEffect } from "react";
import { NameContext } from "../App";

const D = () => {
    const {name,setName}=useContext(NameContext);
    useEffect(()=>{
      setTimeout(()=>{
        setName("srinath sp");
      },5000);
    }
  )
    return <h1>hello , {name}!</h1>
}

export default D
