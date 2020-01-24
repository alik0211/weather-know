import { combineReducers } from 'redux';

import forecast from './forecast';
import locationByIp from './locationByIp';

export default combineReducers({
  forecast,
  locationByIp,
});
