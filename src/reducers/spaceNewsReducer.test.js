import { spaceNewsReducer } from './spaceNewsReducer';

describe('spaceNewsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = spaceNewsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state with addSpaceNews if the action is ADD_SPACE_NEWS', () => {
    const initialState = [];
    const action = {
      type: 'ADD_SPACE_NEWS',
      spaceNews: [
        {
          id: 1,
          title: 'Falcon 1 Makes History',
          event_date_utc: '2008-09-28T23:15:00Z',
          event_date_unix: 1222643700,
          flight_number: 4,
          details:
            'Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.',
          links: {
            reddit: null,
            article:
              'http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0',
            wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1'
          }
        }
      ]
    };
    const result = spaceNewsReducer(initialState, action);
    const expectedState = [
      {
        id: 1,
        title: 'Falcon 1 Makes History',
        event_date_utc: '2008-09-28T23:15:00Z',
        event_date_unix: 1222643700,
        flight_number: 4,
        details:
          'Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.',
        links: {
          reddit: null,
          article:
            'http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0',
          wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1'
        }
      }
    ];

    expect(result).toEqual(expectedState);
  });
});
