import React, { Component } from 'react'
class Hello extends Component{
componentDidMount(){
  console.log('Hello component Mounted')
}
componentWillUnmount(){
  console.log('Hello component UnMounted')
}
  
  render(){
    return (
      <h1>Hello world</h1>
    )
  }
}
export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showHello: true
    }
  }
  hangleToggle=()=>{
    this.setState({
      showHello:!this.state.showHello
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.hangleToggle}>Toggle Hello</button>
        {this.state.showHello && <Hello />}
        
      </div>
    )
  }
}

export default App
