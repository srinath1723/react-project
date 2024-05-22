const Hello=()=>{
  return <h1>Hello, World!</h1>
}


//component:App
const App=()=>{
      return (
        <div>
          <Hello />
          <Hello />
          <Hello />
        </div>
      )
}
export default App;
