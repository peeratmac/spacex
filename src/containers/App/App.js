import React, { Component } from 'react';
import { getElonMuskDreams } from '../../apiCalls';
import LaunchContainer from '../../components/LaunchList/LaunchList';
import { addSpaceData } from '../../actions';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { addSpaceData } = this.props;
    getElonMuskDreams().then(data => addSpaceData(data));
  }

  render = () => {
    return (
      <div>
        <h1>SpaceX</h1>
        <LaunchContainer />
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  addSpaceData: spaceData => dispatch(addSpaceData(spaceData))
});

export default connect(null, mapDispatchToProps)(App);
