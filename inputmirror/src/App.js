import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mirror from './Mirror.js';
import store from './store/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mirror store={store} />
      </div>
    );
  }
}

export default App;
