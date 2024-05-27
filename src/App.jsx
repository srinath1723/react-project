import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  // componentDidMount is a life cycle method that  is called after the component is rendered
  componentDidMount(){
  console.log("component did mount")
  }
  componentDidUpdate(){
    console.log("component did update")
  }
  componentDidUpdate(){
    console.log("component will unmount")
  }
  handleIncrement=()=>{
this.setState({
  count:this.state.count+1
})
  }
  render() {
    return (
      <div>
        <h1>counter:{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default App
