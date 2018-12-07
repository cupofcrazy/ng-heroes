import React, { Component } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
