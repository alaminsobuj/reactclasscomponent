import React, { Component } from 'react'

export default class StateComponent extends Component {
  
state={
    name:'alamin',
    age:20,
    address:{
        house:'131/7',
        road:'Bazar Road'
    },
    list:['php','java','c++','.Net','Python']

 }
  render() {
    return (
      <div>
        <h1>StateComponent </h1>
        
         <h1>Name:{ this.state.name }</h1>
         <h4>Name:{ this.state.age }</h4>
         <address>
            Address:
            House:{ this.state.address.house } <br />
            Road:{ this.state.address.road }
         </address>

         <ul>
          {
             this.state.list.map((item,index) =>(
              <li key={index}>{ item }</li>
             ))
          }
         </ul>
      </div>
    )
  }
}
