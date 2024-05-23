import Hello from "./components/Hello";
//component:App
const App=()=>{

   const a=20;
   const b=10;
   const now = new Date();
      return (
        <div>
         <p>
          Date:{now.toString()}
         <p> {a} plus {b} is {a+b}</p>
         </p>
          
        </div>
      )
}
export default App;
