// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import ClassComponent from './Components/ClassComponent';
import StateComponent from './Components/StateComponent';
import ConstructorComponent from './Components/ConstructorComponent';
import StateAssigninConstructor from './Components/StateAssigninConstructor';
import CounterUsingclass from './Components/CounterUsingclass';

class App extends Component {
  constructor(){
    super();
   console.log('constructor');
  //  this.myRef = React.createRef()
  }
  


  componentDidMount(){
    console.log('componentDidMount');
  }
  render() {
    console.log('render');
    return (
      <div  ref={this.myRef} > 
        
        <h1>Allah Borosha</h1>

         <ClassComponent/>
         ========================
         <StateComponent/>
         ======================
         <ConstructorComponent model="Mustang" />
         ========================
         <StateAssigninConstructor/>
         ========================
         <CounterUsingclass />
      </div>
    )
  }
}
export default App;

