import { createContext, useContext, useState } from "react";

//1.create context
const NameContext=createContext();

// 2.create a privider

export const NameProvider=({children})=>{
    const [name,setName] =useState('Srinath')
    return (
    <NameContext.Provider value={{name,setName}}>
    {children}
    </NameContext.Provider>)
}

export const useName=()=>useContext(NameContext);