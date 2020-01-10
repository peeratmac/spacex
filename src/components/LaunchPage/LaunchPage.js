import React from 'react';
import './LaunchPage.css';

export const LaunchPage = launch => {
  console.log('launch', launch);
  console.log('launch.rocket', launch.rocket);
  console.log('launch.rocket.rocket_id', launch.rocket.rocket_id);

  return (
    <div className='launch-page'>
      <img src={launch.links.mission_patch} alt='Mission Patch' />
      <h1>{launch.flight_number}</h1>
    </div>
  );
};

export default LaunchPage;
