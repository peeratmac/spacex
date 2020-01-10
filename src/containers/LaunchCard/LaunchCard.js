import React from 'react';
import { NavLink } from 'react-router-dom';
import './LaunchCard.css';

export const LaunchCard = ({ launch, saveFavorite }) => {
  return (
    <NavLink
      className='launch-card-main'
      to={`/launch/${launch.flight_number}`}
      style={{ textDecoration: 'none' }}>
      <div
        onClick={() => console.log(`hi, ${launch.links.mission_patch}`)}
        className='launch-card'>
        <p>Flight Number: {launch.flight_number}</p>
        <p>Mission: {launch.mission_name}</p>
        <p>Launch: {launch.launch_year}</p>
        <p className='site-name'>Site: {launch.launch_site.site_name_long}</p>
        <button onClick={() => saveFavorite(launch)} className='save-button'>
          SAVE
        </button>
      </div>
    </NavLink>
  );
};

export default LaunchCard;
