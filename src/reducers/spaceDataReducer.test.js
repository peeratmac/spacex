import { spaceDataReducer } from './spaceDataReducer';

describe('spaceDataReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = spaceDataReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state with addSpaceData if the action is ADD_SPACE_DATA', () => {
    const initialState = [];
    const action = {
      type: 'ADD_SPACE_DATA',
      spaceData: [
        {
          flight_number: '1X',
          mission_name: 'Peerat Falcon'
        }
      ]
    };
    const result = spaceDataReducer(initialState, action);
    const expectedState = [
      {
        flight_number: '1X',
        mission_name: 'Peerat Falcon'
      }
    ];

    expect(result).toEqual(expectedState);
  });
});
