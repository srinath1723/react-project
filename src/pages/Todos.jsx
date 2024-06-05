//define a loader function
 import {useLoaderData} from "react-router-dom";
export const loader= async()=>{

    const response=await fetch('https://665fee565425580055b161ab.mockapi.io/todos',
    {
        method:"GET"
    }
);
// parse the response
 const todos=await response.json();
 
 // return the data
 return todos;
 }
 
 
 
 const Todos = () => {
  //use the dats using the useLoader  hook  
  const todos=useLoaderData();
  console.log(todos);
  return (
    <div>
      Todos
    </div>
  )
}

export default Todos;
