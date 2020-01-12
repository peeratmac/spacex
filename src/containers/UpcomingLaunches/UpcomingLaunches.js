import React, { Component } from 'react';
import { getFutureElonMuskDreams } from '../../apiCalls';
import LaunchCard from '../../containers/LaunchCard/LaunchCard';
import { connect } from 'react-redux';
import './UpcomingLaunches.css';
import { addUpcomingSpaceData } from '../../actions';

export const UpcomingLaunches = ({ upcomingLaunches, saveFavorite }) => {
  const launchesData = upcomingLaunches.map((launch, index) => {
    return (
      <LaunchCard launch={launch} saveFavorite={saveFavorite} key={index} />
    );
  });

  return (
    <div>
      <div className='grid-3'>{launchesData}</div>
    </div>
  );
};

export const mapStateToProps = state => ({
  upcomingLaunches: state.upcomingSpaceData
});

export default connect(mapStateToProps, null)(UpcomingLaunches);
