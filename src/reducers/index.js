import { combineReducers } from 'redux';

import forecast from './forecast';
import positionLonLat from './positionLonLat';
export default combineReducers({ forecast, positionLonLat });
