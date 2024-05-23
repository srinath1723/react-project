const App = () => {
  const handlechange=(e)=>{
    console.log(e.target.value);
  }
  return (
    <div>
      <h1>React App</h1>
     <input
     type="text"
     onChange={handlechange}
     />
     
      
    </div>
  )
}

export default App
