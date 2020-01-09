import React, { Component } from 'react';
import { getElonMuskDreams } from '../../apiCalls';
import LaunchList from '../../components/LaunchList/LaunchList';
import { Favorites } from '../../containers/Favorites/Favorites';
import { addSpaceData, saveFavorites } from '../../actions';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { addSpaceData } = this.props;
    getElonMuskDreams().then(data => addSpaceData(data));
  }

  saveFavorite = launch => {
    this.props.saveFavorites(launch);
  };

  render = () => {
    return (
      <div>
        <h1>SpaceX</h1>
        <Route
          exact
          path='/'
          render={() => (
            <LaunchList
              launches={this.props.launches}
              saveFavorite={this.saveFavorite}
            />
          )}
        />
        <Route
          exact
          path='/favorites'
          render={() => (
            <Favorites
              favoriteLaunches={this.props.favorites}
              saveFavorite={this.saveFavorite}
            />
          )}
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
