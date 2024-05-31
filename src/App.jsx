import { createContext } from "react"
import { useState } from "react"
import B from "./components/B";

//create  a context to store the name
const NameContext= createContext();
//wrap the compont tree with the context provider
const App=()=>{
  const [name,setName] =useState('Srinath')
      return (
      <NameContext.Provider value={{name,setName}}>
      <B />
      </NameContext.Provider>)
}
export { App as default, NameContext};