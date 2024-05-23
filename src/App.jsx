const App = () => {
  const isLoggedIn=true;

 return(
  <div>
    {isLoggedIn && <h1>welcome back</h1>}
    {!isLoggedIn && <h1>please login!</h1>}
  </div>
 )
}

export default App
