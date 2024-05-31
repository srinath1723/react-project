

import { useName } from "../contexts/NameContext";

const D = () => {
    const {name,setName}=useName();
    
    return <h1>hello , {name}!</h1>
       
    
}

export default D
