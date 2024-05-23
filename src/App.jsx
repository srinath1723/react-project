const App = () => {
  const isLoggedIn=false;

 return(
  <div>
    {isLoggedIn ? <h1>welcome back</h1> : <h1>please login</h1>}
  </div>
 )
}

export default App
