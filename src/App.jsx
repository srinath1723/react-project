import { useRef } from "react";

const App=()=>{
      //create a reference using useRef hook
      const inputRef=useRef(null);
      
      const hadleClick=()=>{
           //focus the input element here
           inputRef.current.focus();
           
      }
     
     
      return (
      <>
      <input 
      type="text"
      ref={inputRef}
      />
      <button onClick={hadleClick}>Focus Inputs</button>
      
      </>
)
}
export default App;