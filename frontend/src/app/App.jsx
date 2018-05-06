import React, { Component } from 'react';
// import logo from './logo.svg';
import Todo from '../todo/todo';
import About from '../about/about';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     Vamos ver se realmente funfa
      //   </p>
      // </div>
      <div className='container'>
        <Todo />
        <About />
      </div>
    );
  }
}

export default App;
