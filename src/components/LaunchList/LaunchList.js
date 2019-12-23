import React from 'react';
import LaunchCard from '../../containers/LaunchCard/LaunchCard.js';
import { connect } from 'react-redux';
import './LaunchList.css';

export const LaunchList = ({ launches, saveFavorite }) => {
  const launchesData = launches.map((launch, index) => {
    return (
      <LaunchCard launch={launch} saveFavorite={saveFavorite} key={index} />
    );
  });
  return <div className='grid-3'>{launchesData}</div>;
};

export default connect(null, null)(LaunchList);
