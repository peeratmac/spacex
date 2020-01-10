import React from 'react';

export const LaunchPage = launch => {
  return (
    <div className='launch-page'>
      <img src={`${launch.links.mission_patch}`} alt='Mission Patch' />
    </div>
  );
};

export default LaunchPage;
