import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListContainer from './ListContainer';
import Filters from './Filters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <ListContainer />
        </div>
      </div>
    );
  }
}

export default App;
