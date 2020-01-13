import { errorReducer } from './errorReducer';

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state with errorMessage if the action is HANDLE_ERROR', () => {
    const initialState = '';
    const action = {
      type: 'HANDLE_ERROR',
      errorMessage: 'Error Alert, Alert!'
    };
    const result = errorReducer(initialState, action);
    const expectedState = 'Error Alert, Alert!';

    expect(result).toEqual(expectedState);
  });
});
