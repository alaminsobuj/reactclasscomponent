import React, { Component } from 'react'

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h4>Comppnent inside component?</h4>
      <h4>Who lives in my Garage?</h4>
      </div>
    );
  }
}

export default class ConstructorComponent extends Component {

  constructor(props){
      super(props);
      this.name='almain';
      console.log(this.props)
  }
  
  render() {
    return (
      <div>
        ConstructorComponent <br />
        { this.name } <br />
        { this.props.model } <br />
        <Garage/>
 
      </div>
    )
  }
}


