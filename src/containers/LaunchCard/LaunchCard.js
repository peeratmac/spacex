import React from 'react';
import { NavLink } from 'react-router-dom';
import './LaunchCard.css';

export const LaunchCard = ({ launch, saveFavorite }) => {
  return (
    <div
      onClick={() => console.log(`hi, ${launch.rocket.rocket_id}`)}
      className='launch-card'>
      <p>Flight Number: {launch.flight_number}</p>
      <p>Mission: {launch.mission_name}</p>
      <p>Launch: {launch.launch_year}</p>
      <p>Site: {launch.launch_site.site_name_long}</p>
      <button onClick={() => saveFavorite(launch)} className='save-button'>
        SAVE
      </button>
    </div>
  );
};

export default LaunchCard;
