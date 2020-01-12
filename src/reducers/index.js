import { combineReducers } from 'redux';
import { spaceDataReducer } from './spaceDataReducer';
import { favoritesReducer } from './favoritesReducer';
import { errorReducer } from './errorReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { upcomingSpaceDataReducer } from './upcomingSpaceDataReducer';

export const rootReducer = combineReducers({
  spaceData: spaceDataReducer,
  favorites: favoritesReducer,
  errorMessage: errorReducer,
  isLoading: isLoadingReducer,
  upcomingSpaceData: upcomingSpaceDataReducer
});
