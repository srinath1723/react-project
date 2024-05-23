const App = () => {
  const isLoggedIn=true;

 if(isLoggedIn) {
  return <h1>welcome back!</h1>
    
 }else{
  return <h1> please login </h1>
 }
}

export default App
