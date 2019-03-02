import React, { Component } from 'react';
import './App.css';
import  Timer from  './stateful_timer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Timer />

      </div>
    );
  }
}

export default App;
