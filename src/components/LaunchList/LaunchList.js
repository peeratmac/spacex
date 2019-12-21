import React from 'react';
import LaunchCard from '../../containers/LaunchCard/LaunchCard.js';
import { connect } from 'react-redux';
import './LaunchList.css';

export const LaunchList = ({ launches }) => {
  const launchesData = launches.map(launch => {
    return <LaunchCard launch={launch} />;
  });
  return <div className='grid-3'>{launchesData}</div>;
};

export default connect(null, null)(LaunchList);
