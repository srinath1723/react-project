import axios from "axios";
import { useLoaderData } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import { useState } from "react";

// define a loader function
export const loader = async () => {
    // make an async call to fetch data
    const todos = await axios.get(`https://665fee565425580055b161ab.mockapi.io/todos`);

    // return the data
    return {todos: todos.data };
}

const Todos = () => {

    // use the data using the useLoader hook
    const { todos: initialTodos } = useLoaderData();
    const [todos, setTodos] = useState(initialTodos);
   
   
    const [title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[completed,setCompleted]=useState(false);

    const handleUpdateTodo = (updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    }
  const handleChangeTodo=async (e)=>{
    e.preventDefault();
    
    const newTodo={
        title,description,completed
    }
    const response=await axios.post(`https://665fee565425580055b161ab.mockapi.io/todos`,newTodo);
    response.data&&setTodos([...todos,response.data]);

    alert('Todo created successfully');
  }
  const handledeleteTodo =async(id)=>{
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
      <div>
        <h1>Todo List</h1>
        {
            todos.map(todo => (
                <TodoItem 
                    todo={todo}
                    key={todo.id}
                    onUpdateTodo={handleUpdateTodo}
                />
            ))
        }
        <form onSubmit={handleChangeTodo}>
            <input 
            type="text"
            placeholder="Todo title.."
            value={title}
            onChange={(e) =>setTitle(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Todo description..."
                value={description}
                onChange={(e) =>setDescription(e.target.value)}
            />
            <select
            value={completed}
            onChange={(e) =>setCompleted(e.target.value)}>
                <option value={false}>Not completed</option>
                <option value={true}>Completed</option>
            </select>
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}
export default Todos;