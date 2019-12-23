import React, { Component } from 'react';
import { getElonMuskDreams } from '../../apiCalls';
import LaunchList from '../../components/LaunchList/LaunchList';
import { addSpaceData, saveFavorites } from '../../actions';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { addSpaceData } = this.props;
    getElonMuskDreams().then(data => addSpaceData(data));
  }

  saveFavorite = favorites => {
    this.props.saveFavorites(favorites);
  };

  render = () => {
    return (
      <div>
        <h1>SpaceX</h1>
        <LaunchList
          launches={this.props.launches}
          saveFavorite={this.saveFavorite}
        />
      </div>
    );
  };
}

const mapStateToProps = state => ({
  launches: state.spaceData,
  favorites: state.favorties
});

const mapDispatchToProps = dispatch => ({
  addSpaceData: spaceData => dispatch(addSpaceData(spaceData)),
  saveFavorites: favorites => dispatch(saveFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
