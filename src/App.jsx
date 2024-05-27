import React, { Component } from 'react'

export class App extends Component {
  constructor(props){

    super(props);// call the constructor of the oarent class
    // set the initial state
    this.state={
      counter:0
    }
  }
 increament=()=>  {
  // update the state using the setstate method
this.setState({
  counter:this.state.counter+1
});
 }
 decrease=()=>{
 if(this.state.counter>0){
  this.setState({
    counter:this.state.counter-1
  });
}
 }
 render(){
    
    return (
      <div>
        <p>Count: {this.state.counter}</p>
        <button onClick={this.increament}>Increment</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    )
  }
}

export default App
