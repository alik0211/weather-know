import { combineReducers } from 'redux';

import forecast from './forecast';
import userLocation from './userLocation';

export default combineReducers({
  forecast,
  userLocation,
});
