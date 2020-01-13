import { upcomingSpaceDataReducer } from './upcomingSpaceDataReducer';

describe('upcomingSpaceDataReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = upcomingSpaceDataReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state with upcomingSpaceData if the action is ADD_UPCOMING_SPACE_DATA', () => {
    const initialState = [];
    const action = {
      type: 'ADD_UPCOMING_SPACE_DATA',
      upcomingSpaceData: [
        {
          flight_number: 88,
          mission_name: 'Crew Dragon In Flight Abort Test'
        }
      ]
    };
    const result = upcomingSpaceDataReducer(initialState, action);
    const expectedState = [
      {
        flight_number: 88,
        mission_name: 'Crew Dragon In Flight Abort Test'
      }
    ];

    expect(result).toEqual(expectedState);
  });
});
