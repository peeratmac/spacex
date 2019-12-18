import React, { Component } from 'react';
import { getElonMuskDreams } from './apiCalls';

class App extends Component {
  componentDidMount() {
    getElonMuskDreams().then(data => data);
  }

  render = () => {
    return (
      <div>
        <h1>SpaceX</h1>
      </div>
    );
  };
}

export default App;
