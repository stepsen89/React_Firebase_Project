import React, { Component } from 'react';
import './App.css';

import Usurvey from './Usurvey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Survey App - Firebase Intro</h1>
        </header>
        < Usurvey />
      </div>
    );
  }
}

export default App;
