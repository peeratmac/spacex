import React, { Component } from 'react';
import { getElonMuskDreams } from '../../apiCalls';
import { LaunchList } from '../../components/LaunchList/LaunchList';
import { Favorites } from '../../containers/Favorites/Favorites';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { LaunchPage } from '../../components/LaunchPage/LaunchPage';
import { addSpaceData, saveFavorites, handleError } from '../../actions';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

export class App extends Component {
  async componentDidMount() {
    const { addSpaceData, handleError } = this.props;
    try {
      const data = await getElonMuskDreams();
      addSpaceData(data);
    } catch (error) {
      handleError(error.message);
    }
  }

  saveFavorite = launch => {
    const { saveFavorites, favorites } = this.props;

    const flights = favorites.map(favorite => favorite.flight_number);

    if (flights.includes(launch.flight_number)) {
      let filteredFlights = favorites.filter(
        favorite => favorite.flight_number !== launch.flight_number
      );
      console.log(filteredFlights);
    } else {
      saveFavorites(launch);
    }
  };

  render = () => {
    return (
      <div>
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
          path='/launch/:flight_number'
          render={({ match }) => {
            const { flight_number } = match.params;
            const allLaunches = [...this.props.launches];
            const launchData = allLaunches.find(
              launch => launch.flight_number === parseInt(flight_number)
            );
            return <LaunchPage launch={launchData} />;
          }}
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
  saveFavorites: favorites => dispatch(saveFavorites(favorites)),
  handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
