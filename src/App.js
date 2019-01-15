import React, { Component } from 'react';
import './App.css';
import Calculator from './calculatorComp';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Calculator App</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
