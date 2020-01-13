import { isLoadingReducer } from './isLoadingReducer';

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    const expected = true;
    const result = isLoadingReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state with isLoading status if the action is IS_LOADING', () => {
    const initialState = true;
    const action = {
      type: 'IS_LOADING',
      isLoading: false
    };
    const result = isLoadingReducer(initialState, action);
    const expectedState = false;

    expect(result).toEqual(expectedState);
  });
});
