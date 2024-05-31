import { useContext } from "react";
import { createContext } from "react"
import { useState } from "react"

//create  a context to store the name
const NameContext= createContext();

const D=()=>{
  // use the context in thr component
  const {name}=useContext(NameContext)
  return <h1>hello , {name}!</h1>
 }
const C=()=>{
  return <D />
}

const B=()=>{
 return <C />
}
//wrap the compont tree with the context provider
const App=()=>{
  const [name,setName] =useState('jhon')
      return (
      <NameContext.Provider value={{name}}>
      <B />
      </NameContext.Provider>)
}
export default App;