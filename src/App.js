import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configure-store'
import './App.css'

import Persons from './container/persons'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">JS Interview - Tobias Lins</h1>
          </header>
          <Persons />
        </div>
      </Provider>
    )
  }
}

export default App
