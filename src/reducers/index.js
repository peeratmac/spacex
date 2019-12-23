import { combineReducers } from 'redux';
import { spaceDataReducer } from './spaceDataReducer';
import { favoritesReducer } from './favoritesReducer';

export const rootReducer = combineReducers({
  spaceData: spaceDataReducer,
  favorites: favoritesReducer
});
