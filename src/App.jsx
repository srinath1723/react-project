import Todo from "./components/Todo"
const App = () => {
  const todos=[
    {id:1,title:'Buy butter',complete:false},
    {id:2,title:'Buy milk',complete:true},
    {id:3,title:'Buy bread',complete:false}
  ]
  return (
    <div>
      <h1>Todo List</h1>
      {
      todos.map(todo =>
      <Todo 
      key={todos.id}
      todo={todo}
      />
      )}
      
    </div>
  )
}

export default App
