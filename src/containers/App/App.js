import React, { Component } from 'react';
import { getElonMuskDreams } from '../../apiCalls';
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
      </div>
    );
  };
}

const mapStateToProps = state => ({
  spaceData: state.spaceData
});

const mapDispatchToProps = dispatch => ({
  addSpaceData: spaceData => dispatch(addSpaceData(spaceData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
