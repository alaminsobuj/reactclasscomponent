import React, { Component } from 'react'

export default class CounterUsingclass extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
    }
    handleChange =()=>{
        this.setState({
          counter:this.state.counter+1
        })
    }
    handleChangeDecrement =()=>{
        this.setState({
          counter:this.state.counter-1
        })
    }
  render() {
    return (
      <div>
        CounterUsingclass <br/>
        <span>{ this.state.counter}</span><br/>
        <button onClick={this.handleChange}>Click me</button>
        <button onClick={this.handleChangeDecrement}>(-)Click me</button>
      </div>
    )
  }
}
