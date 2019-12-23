import React from 'react';
import { connect } from 'react-redux';
import './LaunchCard.css';

export const LaunchCard = ({ launch }) => {
  return (
    <div className='launch-card'>
      <p>Flight Number: {launch.flight_number}</p>
      <p>Mission: {launch.mission_name}</p>
      <p>Launch: {launch.launch_year}</p>
      <p>Site: {launch.launch_site.site_name_long}</p>
      <button className='save-button'>SAVE</button>
    </div>
  );
};

export const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps, null)(LaunchCard);
