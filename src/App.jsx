
import { useState } from 'react'

const App = () => {
let[count,setCount]=useState(0);
const hangleIncrement=()=>{
  setCount(count+1);
}
const hangleDecrement=()=>{
  if(count>0){
  setCount(count-1);
  }
}
const hangleReset=()=>{
  setCount(0);
}
  return (
    <div>
      <h1>Count:{count }</h1>
      <button onClick={hangleIncrement}>Increament</button>
      <button onClick={hangleDecrement}>Decrement</button>
      <button onClick={hangleReset}>Reset</button>
    </div>
  )
}

export default App
