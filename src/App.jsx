

import B from "./components/B";
import { NameProvider } from "./contexts/NameContext";

//create  a context to store the name

//wrap the compont tree with the context provider
const App=()=>{
  
      return (
      <NameProvider>
      <B />
      </NameProvider>)
}
export default App;