import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import {
  getElonMuskDreams,
  getFutureElonMuskDreams,
  getElonMuskNews
} from '../../apiCalls';
import {
  addSpaceData,
  addUpcomingSpaceData,
  addSpaceNews,
  isLoading,
  handleError,
  saveFavorites
} from '../../actions';

jest.mock('../../apiCalls.js');

describe('APP', () => {
  let wrapper;
  const mockLaunchData = [
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
        mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
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
    }
  ];

  const mockAddSpaceData = jest.fn();
  const mockSaveFavorties = jest.fn();
  const mockIsLoading = jest.fn();
  const mockHandleError = jest.fn();
  const mockAddUpcomingSpaceData = jest.fn();
  const mockAddSpaceNews = jest.fn();

  getElonMuskDreams.mockImplementation(() => Promise.resolve(mockLaunchData));
  getFutureElonMuskDreams.mockImplementation(() =>
    Promise.resolve(mockLaunchData)
  );
  getElonMuskNews.mockImplementation(() => Promise.resolve(mockLaunchData));

  beforeEach(() => {
    wrapper = shallow(
      <App
        launches={mockLaunchData}
        favorites={mockLaunchData}
        addSpaceData={mockAddSpaceData}
        saveFavorites={mockSaveFavorties}
        isLoading={mockIsLoading}
        handleError={mockHandleError}
        addUpcomingSpaceData={mockAddUpcomingSpaceData}
        addSpaceNews={mockAddSpaceNews}
      />
    );
  });

  it('should match the App Snapshot UI', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke getElonMuskDreams after mounting', () => {
    expect(getElonMuskDreams).toHaveBeenCalled();
  });

  it('should invoke getFutureElonMuskDreams after mounting', () => {
    expect(getFutureElonMuskDreams).toHaveBeenCalled();
  });

  it('should invoke getElonMuskNews after mounting', () => {
    expect(getElonMuskNews).toHaveBeenCalled();
  });

  it('should invoke addSpaceData prop when getElonMuskDreams resolves', () => {
    expect(mockAddSpaceData).toHaveBeenCalledWith(mockLaunchData);
  });

  it('should call saveFavorites (from Action Creator) when saveFavorite (App Method) is called', () => {
    wrapper.instance().saveFavorite(mockLaunchData);

    expect(mockSaveFavorties).toHaveBeenCalled();
    expect(mockSaveFavorties).toHaveBeenCalledWith(mockLaunchData);
  });

  it('should invoke isLoading prop when getElonMusk related methods resolve', () => {
    expect(mockIsLoading).toHaveBeenCalledWith(false);
  });

  it.skip('should invoke handleError prop if getElonMuskDreams rejects', async () => {
    getElonMuskDreams.mockImplementation(() => Promise.reject(Error('error')));

    wrapper = await shallow(
      <App
        launches={mockLaunchData}
        favorites={mockLaunchData}
        addSpaceData={mockAddSpaceData}
        saveFavorites={mockSaveFavorties}
        isLoading={mockIsLoading}
        handleError={mockHandleError}
      />
    );

    await wrapper.instance().forceUpdate();
    expect(mockHandleError).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('should return only the necessary information from the redux store', () => {
      const mockState = {
        spaceData: mockLaunchData,
        favorites: [],
        isLoading: false,
        upcomingSpaceData: [],
        spaceNews: [],
        helloItsMe: true
      };

      const expected = {
        launches: mockLaunchData,
        favorites: [],
        isLoading: false,
        upcomingLaunches: [],
        spaceNews: []
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with ADD_SPACE_DATA action when addSpaceData is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addSpaceData([{ launch: 'Falcon XR' }]);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addSpaceData([{ launch: 'Falcon XR' }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with ADD_UPCOMING_SPACE_DATA action when addUpcomingSpaceData is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addUpcomingSpaceData([
        { launch: 'Falcon 11 Pro' }
      ]);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addUpcomingSpaceData([{ launch: 'Falcon 11 Pro' }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with ADD_SPACE_NEWS action when addSpaceNews is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addSpaceNews([{ news: 'Falcon Heavier' }]);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addSpaceNews([{ news: 'Falcon Heavier' }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with IS_LOADING action when isLoading is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = handleError('Error, Alert, Alert!');
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.handleError('Error, Alert, Alert!');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with HANDLE_ERROR action when handleError is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = isLoading(false);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.isLoading(false);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
