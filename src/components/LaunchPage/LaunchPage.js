import React from 'react';
import './LaunchPage.css';

export const LaunchPage = launch => {
  return (
    <div>
      <img
        className='patch-image'
        src={launch.links.mission_patch}
        alt='Mission Patch'
      />
      <div className='launch-page'>
        <h1 className='launch-page-info'>Mission: {launch.mission_name}</h1>
        <p className='launch-page-info'>
          Flight Number: {launch.flight_number}
        </p>
        <p className='launch-page-info'>Launch: {launch.launch_year}</p>
        <p className='launch-page-info'>
          Site: {launch.launch_site.site_name_long}
        </p>
        <p className='launch-page-info'>
          Related Article:{' '}
          <a href={launch.links.article_link}>{launch.mission_name}</a>
        </p>
        <p className='launch-page-info'>
          More Information:{'   '}
          <a href={launch.links.wikipedia}>{launch.mission_name}</a>
        </p>
      </div>
      <div
        className='video'
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          paddingTop: 25,
          height: 0
        }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}
          frameBorder='0'
        />
      </div>
    </div>
  );
};

export default LaunchPage;
