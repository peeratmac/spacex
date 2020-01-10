import React, { Component } from 'react';
import { getElonMuskDreams } from '../../apiCalls';
import { LaunchList } from '../../components/LaunchList/LaunchList';
import { Favorites } from '../../containers/Favorites/Favorites';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
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
    const { saveFavorites, favorites } = this.props;

    const flights = favorites.map(favorite => favorite.flight_number);

    // if (flights.includes(launch.flight_number)) {
    //   console.log('yep');
    //   const filteredFlights = favorites.filter(
    //     favorite => favorite.flight_number !== launch.flight_number
    //   );
    //   saveFavorites(filteredFlights);
    // }

    saveFavorites(launch);
  };

  render = () => {
    console.log(this.props.favorites);
    return (
      <div>
        <h1>SpaceX</h1>
        <Route path='/' render={() => <NavigationBar />} />
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
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  addSpaceData: spaceData => dispatch(addSpaceData(spaceData)),
  saveFavorites: favorites => dispatch(saveFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
