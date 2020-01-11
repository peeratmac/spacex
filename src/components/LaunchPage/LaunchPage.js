import React from 'react';
import './LaunchPage.css';

export const LaunchPage = launch => {
  console.log('launch', launch);
  console.log('launch.rocket', launch.rocket);
  console.log('launch.rocket.rocket_id', launch.rocket.rocket_id);

  return (
    <div className='launch-page'>
      <h1>Mission: {launch.mission_name}</h1>
      <p>Flight Number: {launch.flight_number}</p>
      <p>Launch: {launch.launch_year}</p>
      <p className='site-name'>Site: {launch.launch_site.site_name_long}</p>
      <img src={launch.links.mission_patch_small} alt='Mission Patch' />
      <p>
        More Information:{'   '}
        <a href={launch.links.wikipedia}>{launch.mission_name}</a>
      </p>
    </div>
  );
};

export default LaunchPage;
