

import { useState } from 'react';
import Counter from './components/Counter';
const App = () => {
let[count,setCount]=useState(0);



const hangleIncrement=()=>{
  setCount(count+1);
}

  return (
    <div>
      <Counter
      count={count} />
      <button onClick={hangleIncrement}>Increament</button>
      
    </div>
  )
}

export default App
