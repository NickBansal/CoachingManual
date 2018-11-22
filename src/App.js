import React, { Component } from 'react';
import Navbar from './component/Navbar'
import NewForm from './component/NewForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <NewForm />
      </div>
    );
  }
}

export default App;
