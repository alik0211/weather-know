import { connect } from 'react-redux';
import { getLocation, setLocation } from '../../actions/user';
import { getForecast, getWeather } from '../../actions/forecast';

import App from './cmp-app';

const mapStateToProps = (state, ownProps) => {
  const { city } = state.user;
  const { byTimestamp, byDate, allDate, fact } = state.forecast;

  return {
    city,
    fact,
    byTimestamp,
    byDate,
    allDate,
  };
};

const mapDispatchToProps = {
  getLocation,
  getWeather,
  getForecast,
  setLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
