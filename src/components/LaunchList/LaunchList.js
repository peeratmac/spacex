import React from 'react';
import LaunchCard from '../../containers/LaunchCard/LaunchCard.js';
import { connect } from 'react-redux';

export const LaunchList = ({ launches }) => {
  const launchesData = launches.map(launch => {
    return <LaunchCard launch={launch} />;
  });
  return (
    <div>
      <h1>LaunchContainer</h1>
      {launchesData}
    </div>
  );
};

export default connect(null, null)(LaunchList);
