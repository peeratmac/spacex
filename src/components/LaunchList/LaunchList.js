import React from 'react';
import LaunchCard from '../../containers/LaunchCard/LaunchCard';
import { connect } from 'react-redux';
import './LaunchList.css';

export const LaunchList = ({ launches, saveFavorite, isLoading }) => {
  const loadingImage = (
    <img
      src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif'
      alt='Loading Image'
    />
  );
  const launchesData = launches.map((launch, index) => {
    return (
      <LaunchCard launch={launch} saveFavorite={saveFavorite} key={index} />
    );
  });

  return (
    <div>
      {isLoading && <div>{loadingImage}</div>}
      <div className='grid-3'>{launchesData}</div>
    </div>
  );
};

export const mapStateToProps = state => ({
  isLoading: state.isLoading
});

export default connect(mapStateToProps, null)(LaunchList);
