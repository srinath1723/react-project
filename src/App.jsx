
import { useState } from "react";
import { useRef } from "react";

const App=()=>{
      const countRef=useRef(0);
      const [state,setState]=useState(0);
     const handleRefIncrement=()=>{
      countRef.current +=1;
      console.log(countRef.current);
     }
     const handleStateCount=()=>{
      setState(state+1);
    
     }
     console.log("component render");
      return (
      <>
      <h1>State Count: {state}</h1>
      <h1>Ref Count: {countRef.current}</h1>
      <button onClick={handleRefIncrement}>Increment Ref Count</button>
      <button onClick={handleStateCount}>Increment State Count</button>
      </>
)
}
export default App;