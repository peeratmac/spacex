import { combineReducers } from 'redux';
import { spaceDataReducer } from './spaceDataReducer';

export const rootReducer = combineReducers({
  spaceData: spaceDataReducer
});
