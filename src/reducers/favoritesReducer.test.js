import { favoritesReducer } from './favoritesReducer';

describe('favoritesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state with favorites if the action is SAVE_FAVORITES', () => {
    const initialState = [];
    const action = {
      type: 'SAVE_FAVORITES',
      favorites: [
        {
          flight_number: 88,
          mission_name: 'Crew Dragon In Flight Abort Test'
        }
      ]
    };
    const result = favoritesReducer(initialState, action);
    const expectedState = [
      [
        {
          flight_number: 88,
          mission_name: 'Crew Dragon In Flight Abort Test'
        }
      ]
    ];

    expect(result).toEqual(expectedState);
  });
});
