import React from 'react';
import { connect } from 'react-redux';

export const LaunchCard = ({ launch }) => {
  return (
    <div>
      <h1>{launch.flight_number}</h1>
    </div>
  );
};

export default LaunchCard;
