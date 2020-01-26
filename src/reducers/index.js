import { combineReducers } from 'redux';

import forecast from './forecast';
import user from './user';

export default combineReducers({
  forecast,
  user,
});
