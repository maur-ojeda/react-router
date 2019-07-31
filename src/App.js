import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Prueba from './components/Prueba'
import Invoices from './components/Invoices'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Route exact path="/" component={Prueba} />
        <Route exact path="/invoices" component={Invoices} />
      </div>
    )
  }
}

export default App;
