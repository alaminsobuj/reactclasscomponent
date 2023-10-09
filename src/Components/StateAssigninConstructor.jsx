import React, { Component } from 'react'

export default class StateAssigninConstructor extends Component {
     constructor(props){
        super(props);
        this.state = {
            name:'Alamin',
            institute:'Feni Computer Institute',
            roll:'484180',
            department:"CST"
        };

      
     }

  render() {
    return (
      <div>StateAssigninConstructor <br/>
        <h3>{ this.state.name } </h3>
        <h3>{ this.state.roll } </h3>
        <h3>{ this.state.institute } </h3>
        <h3>{ this.state.department } </h3>
        
     </div>
    )
  }
}
