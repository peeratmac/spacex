import React from 'react';
import LaunchCard from '../LaunchCard/LaunchCard';
import { connect } from 'react-redux';
import './Favorites.css';

export const Favorites = ({ favoriteLaunches, saveFavorite }) => {
  if (favoriteLaunches.length > 0) {
    const displayFavorites = favoriteLaunches.map((favoriteLaunch, index) => {
      return (
        <LaunchCard
          launch={favoriteLaunch}
          saveFavorite={saveFavorite}
          key={index}
        />
      );
    });
    return <div className='grid-3'>{displayFavorites}</div>;
  }

  return (
    <div>
      <h1>
        Please favorite some SpaceX launches and your favorites will be
        displayed here!
      </h1>
    </div>
  );
};

export const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps, null)(Favorites);
