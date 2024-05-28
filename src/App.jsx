

import { useEffect, useState } from 'react';
import Counter from './components/Counter';
const App = () => {
let[count,setCount]=useState(0);
let[history,setHistory]=useState([]);

useEffect(()=>{
  console.log(history)
},[history])
const hangleIncrement=()=>{
  setCount(count+1);
  setHistory([...history,'I'])
}
const hangleDecrement=()=>{
  setCount(count-1);
  setHistory([...history,'D'])
}
const hangleReset=()=>{
  setCount(0);
  setHistory([...history,'R'])
}

  return (
    <div>
      <Counter
      count={count} 
      history={history} />
      <button onClick={hangleIncrement}>Increment</button>
      <button onClick={hangleDecrement}>Decrement</button>
      <button onClick={hangleReset}>Reset</button>
    </div>
  )
}

export default App
