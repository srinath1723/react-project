import { useState } from "react";
import { useRef } from "react";

const App=()=>{
      const [state,setState]=useState(0);
      //create a reference using useRef hook
      const inputRef=useRef(null);
      
      const hadleClick=()=>{
           //focus the input element here
           inputRef.current.focus();
           
      }
      const hadleChange=()=>{
            //focus the input element here
            inputRef.current.value="HEllo world";// this will not trigger re-render
            setState(state+1);//this will trigger re-render
            
       }
       console.log("rendering component");
     
     
      return (
      <>
      <input 
      type="text"
      ref={inputRef}
      />
      <button onClick={hadleClick}>Focus Inputs</button>
      <button onClick={hadleChange}>Change Value</button>
      </>
)
}
export default App;