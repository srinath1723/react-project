//define a loader function
import axios  from "axios";
 import {useLoaderData} from "react-router-dom";
export const loader= async()=>{


    // make an async call to fetch data
    const todos = await axios.get(`https://665fee565425580055b161ab.mockapi.io/todos`);
 
 // return the data
 return todos.data;
 }
 
 
 
 const Todos = () => {
  //use the dats using the useLoader  hook  
  const todos=useLoaderData();
  console.log(todos);
  return (
    <div>
          <h1>Todo List</h1>
          <ul>
              {
                  todos.map(todo => (
                      <li key={todo.id}><strong>{todo.title}</strong><br /><em>{todo.description}</em></li>
                  ))
              }
          </ul>
    </div>
  )
}

export default Todos;
