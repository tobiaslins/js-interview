import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">JS Interview - Tobias Lins</h1>
        </header>
        <button onClick={console.log}>Add</button>
      </div>
    )
  }
}

export default App
