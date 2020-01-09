import React from 'react';
import LaunchCard from '../LaunchCard/LaunchCard';
import { connect } from 'react-redux';
import './Favorites.css';

export const Favorites = ({ favoriteLaunches, saveFavorite }) => {
  const displayFavorites = favoriteLaunches.map((favoriteLaunch, index) => (
    <LaunchCard
      key={index}
      launch={favoriteLaunch}
      saveFavorite={saveFavorite}
    />
  ));

  return (
    <div>
      <h1>{displayFavorites}</h1>
    </div>
  );
};

export default Favorites;
