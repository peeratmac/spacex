import React from 'react';
import { shallow } from 'enzyme';
import { UpcomingLaunches } from './UpcomingLaunches';

describe('UPCOMING LAUNCHES', () => {
  const mockUpcomingLaunchesData = [
    {
      flight_number: 88,
      mission_name: 'Crew Dragon In Flight Abort Test',
      mission_id: ['EE86F74'],
      launch_year: '2020',
      launch_date_unix: 1579352400,
      launch_date_utc: '2020-01-18T13:00:00.000Z',
      launch_date_local: '2020-01-18T08:00:00-05:00',
      is_tentative: false,
      tentative_max_precision: 'hour',
      tbd: false,
      launch_window: null,
      rocket: {
        rocket_id: 'falcon9',
        rocket_name: 'Falcon 9',
        rocket_type: 'FT',
        first_stage: {
          cores: [
            {
              core_serial: 'B1046',
              flight: 4,
              block: 5,
              gridfins: null,
              legs: null,
              reused: true,
              land_success: null,
              landing_intent: null,
              landing_type: null,
              landing_vehicle: null
            }
          ]
        },
        second_stage: {
          block: null,
          payloads: [
            {
              payload_id: 'Crew Dragon In Flight Abort Test',
              norad_id: [],
              cap_serial: null,
              reused: true,
              customers: ['NASA (CCtCap)'],
              nationality: 'United States',
              manufacturer: 'SpaceX',
              payload_type: 'Crew Dragon',
              payload_mass_kg: null,
              payload_mass_lbs: null,
              orbit: 'SO',
              orbit_params: {
                reference_system: 'geocentric',
                regime: 'sub-orbital',
                longitude: null,
                semi_major_axis_km: null,
                eccentricity: null,
                periapsis_km: null,
                apoapsis_km: null,
                inclination_deg: null,
                period_min: null,
                lifespan_years: null,
                epoch: null,
                mean_motion: null,
                raan: null,
                arg_of_pericenter: null,
                mean_anomaly: null
              },
              mass_returned_kg: null,
              mass_returned_lbs: null,
              flight_time_sec: null,
              cargo_manifest: null,
              uid: 'UerI6qmZTU2Fx2efDFm3QQ=='
            }
          ]
        },
        fairings: null
      },
      ships: [],
      telemetry: {
        flight_club: null
      },
      launch_site: {
        site_id: 'ksc_lc_39a',
        site_name: 'KSC LC 39A',
        site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
      },
      launch_success: null,
      links: {
        mission_patch: null,
        mission_patch_small: null,
        reddit_campaign:
          'https://www.reddit.com/r/spacex/comments/ek7eny/in_flight_abort_test_launch_campaign_thread',
        reddit_launch: null,
        reddit_recovery: null,
        reddit_media: null,
        presskit: null,
        article_link: null,
        wikipedia: null,
        video_link: null,
        youtube_id: null,
        flickr_images: []
      },
      details:
        "SpaceX will launch a Crew Dragon capsule from LC-39A, KSC on a fully fueled Falcon 9 rocket and then trigger the launch escape system during the period of maximum dynamic pressure. As part of NASA'a Commercial Crew Integrated Capability program (CCiCap) this test will contribute valuable data to help validate Crew Dragon and its launch abort system. The Crew Dragon will be recovered by GO Searcher after splashdown in the Atlantic Ocean. This flight does not go to orbit. The booster and upper stage are expected to break up following capsule separation and there will be no landing attempt.",
      upcoming: true,
      static_fire_date_utc: null,
      static_fire_date_unix: null,
      timeline: null,
      crew: null,
      last_date_update: '2019-11-27T01:51:12.000Z',
      last_ll_launch_date: null,
      last_ll_update: null,
      last_wiki_launch_date: '2019-12-01T00:00:00.000Z',
      last_wiki_revision: '638b6fa7-10b8-11ea-bc31-0e65898001b1',
      last_wiki_update: '2019-11-27T01:51:12.000Z',
      launch_date_source: 'wiki'
    }
  ];

  it('should match the UpcomingLaunches Snapshot UI', () => {
    let wrapper = shallow(
      <UpcomingLaunches
        upcomingLaunches={mockUpcomingLaunchesData}
        saveFavorite={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
