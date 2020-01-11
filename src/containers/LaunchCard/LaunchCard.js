import React from 'react';
import { NavLink } from 'react-router-dom';
import './LaunchCard.css';

export const LaunchCard = ({ launch, saveFavorite }) => {
  return (
    <div className='launch-card-main'>
      <NavLink
        className='launch-card'
        to={`/launch/${launch.flight_number}`}
        style={{ textDecoration: 'none' }}>
        <p>Flight Number: {launch.flight_number}</p>
        <p>Mission: {launch.mission_name}</p>
        <p>Launch: {launch.launch_year}</p>
        <p className='site-name'>Site: {launch.launch_site.site_name_long}</p>
      </NavLink>
      <button onClick={() => saveFavorite(launch)} className='save-button'>
        SAVE
      </button>
    </div>
  );
};

export default LaunchCard;
