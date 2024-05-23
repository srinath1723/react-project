const App = () => {
  const handleclick=()=>{
    console.log('button click');
  }
  return (
    <div>
      <h1>React App</h1>
     <button onClick={handleclick}>Click me!</button>  
     
      
    </div>
  )
}

export default App
