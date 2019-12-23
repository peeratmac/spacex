import React, { Component } from 'react';
import { getElonMuskDreams } from '../../apiCalls';
import LaunchContainer from '../../components/LaunchList/LaunchList';
import { addSpaceData } from '../../actions';
import { Route } from 'react-router-dom';
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
        <LaunchContainer launches={this.props.launches} />
      </div>
    );
  };
}

const mapStateToProps = state => ({
  launches: state.spaceData
});

const mapDispatchToProps = dispatch => ({
  addSpaceData: spaceData => dispatch(addSpaceData(spaceData)),
  saveFavorites: favorites => dispatch(saveFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
