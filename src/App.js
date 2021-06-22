import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { name: 'Abhishek', age: 28 },
      { name: 'ravinder', age: 29 },
      { name: 'yash', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'ravinder', age: 29 },
        { name: 'yash', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Abhishek Singh', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'ravinder', age: 26 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={() => this.switchNameHandler('Abhishek Singh!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Abhishek!')}
          changed={this.nameChangedHandler} >My Hobbies: Travelling</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;





// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React!'))



// const app = props => {

//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'ashwani', age: 22 },
//       { name: 'abhishek', age: 23 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other value!')
//   console.log(personState, otherState)

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: 'yash', age: 22 },
//         { name: 'abhishek', age: 23 }
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hello React!</h1>
//       <p>I am Going to learn you within a week</p>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age} />
//       <Person name={personState.persons[1].name} age={personState.persons[0].age}>Hello! eveyone</Person>
//     </div>
//   );
// }