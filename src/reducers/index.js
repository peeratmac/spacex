import { combineReducers } from 'redux';
import { spaceDataReducer } from './spaceDataReducer';
import { favoritesReducer } from './favoritesReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  spaceData: spaceDataReducer,
  favorites: favoritesReducer,
  errorMessage: errorReducer
});
