import {
  getElonMuskDreams,
  getFutureElonMuskDreams,
  getElonMuskNews
} from './apiCalls';

describe('API CALLS', () => {
  describe('getElonMuskDreams', () => {
    let mockResponse = [
      {
        flight_number: 1,
        mission_name: 'FalconSat',
        mission_id: [],
        upcoming: false,
        launch_year: '2006',
        launch_date_unix: 1143239400,
        launch_date_utc: '2006-03-24T22:30:00.000Z',
        launch_date_local: '2006-03-25T10:30:00+12:00',
        is_tentative: false,
        tentative_max_precision: 'hour',
        tbd: false,
        launch_window: 0,
        rocket: {
          rocket_id: 'falcon1',
          rocket_name: 'Falcon 1',
          rocket_type: 'Merlin A',
          first_stage: {
            cores: [
              {
                core_serial: 'Merlin1A',
                flight: 1,
                block: null,
                gridfins: false,
                legs: false,
                reused: false,
                land_success: null,
                landing_intent: false,
                landing_type: null,
                landing_vehicle: null
              }
            ]
          },
          second_stage: {
            block: 1,
            payloads: [
              {
                payload_id: 'FalconSAT-2',
                norad_id: [],
                reused: false,
                customers: ['DARPA'],
                nationality: 'United States',
                manufacturer: 'SSTL',
                payload_type: 'Satellite',
                payload_mass_kg: 20,
                payload_mass_lbs: 43,
                orbit: 'LEO',
                orbit_params: {
                  reference_system: 'geocentric',
                  regime: 'low-earth',
                  longitude: null,
                  semi_major_axis_km: null,
                  eccentricity: null,
                  periapsis_km: 400,
                  apoapsis_km: 500,
                  inclination_deg: 39,
                  period_min: null,
                  lifespan_years: null,
                  epoch: null,
                  mean_motion: null,
                  raan: null,
                  arg_of_pericenter: null,
                  mean_anomaly: null
                },
                uid: 'UerI6qmZTU2Fx2efDFm3QQ=='
              }
            ]
          },
          fairings: {
            reused: false,
            recovery_attempt: false,
            recovered: false,
            ship: null
          }
        },
        ships: [],
        telemetry: {
          flight_club: null
        },
        launch_site: {
          site_id: 'kwajalein_atoll',
          site_name: 'Kwajalein Atoll',
          site_name_long: 'Kwajalein Atoll Omelek Island'
        },
        launch_success: false,
        launch_failure_details: {
          time: 33,
          altitude: null,
          reason: 'merlin engine failure'
        },
        links: {
          mission_patch: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png',
          mission_patch_small:
            'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
          reddit_campaign: null,
          reddit_launch: null,
          reddit_recovery: null,
          reddit_media: null,
          presskit: null,
          article_link:
            'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
          wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
          video_link: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
          youtube_id: '0a_00nJ_Y88',
          flickr_images: []
        },
        details: 'Engine failure at 33 seconds and loss of vehicle',
        static_fire_date_utc: '2006-03-17T00:00:00.000Z',
        static_fire_date_unix: 1142553600,
        timeline: {
          webcast_liftoff: 54
        },
        crew: null
      },
      {
        flight_number: 2,
        mission_name: 'DemoSat',
        mission_id: [],
        launch_year: '2007',
        launch_date_unix: 1174439400,
        launch_date_utc: '2007-03-21T01:10:00.000Z',
        launch_date_local: '2007-03-21T13:10:00+12:00',
        is_tentative: false,
        tentative_max_precision: 'hour',
        tbd: false,
        launch_window: 0,
        rocket: {
          rocket_id: 'falcon1',
          rocket_name: 'Falcon 1',
          rocket_type: 'Merlin A',
          first_stage: {
            cores: [
              {
                core_serial: 'Merlin2A',
                flight: 1,
                block: null,
                gridfins: false,
                legs: false,
                reused: false,
                land_success: null,
                landing_intent: false,
                landing_type: null,
                landing_vehicle: null
              }
            ]
          },
          second_stage: {
            block: 1,
            payloads: [
              {
                payload_id: 'DemoSAT',
                norad_id: [],
                reused: false,
                customers: ['DARPA'],
                nationality: 'United States',
                manufacturer: 'SpaceX',
                payload_type: 'Satellite',
                payload_mass_kg: null,
                payload_mass_lbs: null,
                orbit: 'LEO',
                orbit_params: {
                  reference_system: 'geocentric',
                  regime: 'low-earth',
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
                uid: 'UerI6qmZTU2Fx2efDFm3QQ=='
              }
            ]
          },
          fairings: {
            reused: false,
            recovery_attempt: false,
            recovered: false,
            ship: null
          }
        },
        ships: [],
        telemetry: {
          flight_club: null
        },
        launch_site: {
          site_id: 'kwajalein_atoll',
          site_name: 'Kwajalein Atoll',
          site_name_long: 'Kwajalein Atoll Omelek Island'
        },
        launch_success: false,
        launch_failure_details: {
          time: 301,
          altitude: 289,
          reason: 'harmonic oscillation leading to premature engine shutdown'
        },
        links: {
          mission_patch: 'https://images2.imgbox.com/be/e7/iNqsqVYM_o.png',
          mission_patch_small:
            'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png',
          reddit_campaign: null,
          reddit_launch: null,
          reddit_recovery: null,
          reddit_media: null,
          presskit: null,
          article_link:
            'https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html',
          wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
          video_link: 'https://www.youtube.com/watch?v=Lk4zQ2wP-Nc',
          youtube_id: 'Lk4zQ2wP-Nc',
          flickr_images: []
        },
        details:
          'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
        upcoming: false,
        static_fire_date_utc: null,
        static_fire_date_unix: null,
        timeline: {
          webcast_liftoff: 60
        },
        crew: null
      }
    ];

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse);
          }
        });
      });
    });

    it('should be passed the correct URL', () => {
      getElonMuskDreams();

      expect(window.fetch).toHaveBeenCalledWith(
        'https://api.spacexdata.com/v3/launches/'
      );
    });

    it('should return an array of all the launches by SpaceX', () => {
      expect(getElonMuskDreams()).resolves.toEqual(mockResponse);
    });

    it('should return an error for a response that is not ok from fetching the launches', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getElonMuskDreams()).rejects.toEqual(
        Error('Error with GET request to retrieve all Launches Data')
      );
    });
  });

  describe('getFutureElonMuskDreams', () => {
    let mockResponse = [
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

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse);
          }
        });
      });
    });

    it('should be passed the correct URL', () => {
      getFutureElonMuskDreams();

      expect(window.fetch).toHaveBeenCalledWith(
        'https://api.spacexdata.com/v3/launches/upcoming'
      );
    });

    it('should return an array of all the future launches by SpaceX', () => {
      expect(getFutureElonMuskDreams()).resolves.toEqual(mockResponse);
    });

    it('should return an error for a response that is not ok from fetching the future/upcoming launches', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getFutureElonMuskDreams()).rejects.toEqual(
        Error('Error with GET request to retrieve future Launches Data')
      );
    });
  });
});
