import React, { Component } from 'react';
import { getFutureElonMuskDreams } from '../../apiCalls';
import LaunchCard from '../../containers/LaunchCard/LaunchCard';
import { connect } from 'react-redux';
import './UpcomingLaunches.css';
import { LaunchList } from '../../components/LaunchList/LaunchList';
import { addUpcomingSpaceData } from '../../actions';

export const UpcomingLaunches = () => {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export const mapStateToProps = state => ({
  upcomingLaunches: state.upcomingSpaceData
});

export default connect(mapStateToProps, null)(UpcomingLaunches);
