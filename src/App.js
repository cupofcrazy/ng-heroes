import React, { Component } from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About'
import Hero from './components/Hero/Hero'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <Route path="/" component={ Home } exact />
        <Route path="/about" component={ About } />
        <Route path="/heroes/:id" component={Hero} />
      </div>
    );
  }
}

export default App;
