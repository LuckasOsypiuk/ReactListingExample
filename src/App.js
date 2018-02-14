import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import Listing from './listing-component/listing-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Listing />
      </div>
    );
  }
}

export default App;
