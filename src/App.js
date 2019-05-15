import React, { Component } from 'react';

import './App.css';
import ReduxHome from './components/ReduxHome';
import ReduxFetch from './components/reduxFetch';

import Routing from './components/routing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        {/* <ReduxFetch />
        <ReduxHome /> */}
        <Routing />
      </div>
    );
  }
}

export default App;
