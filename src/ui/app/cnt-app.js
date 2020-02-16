import { connect } from 'react-redux';
import { getLocation, setLocation } from '../../actions/user';
import { getForecast } from '../../actions/forecast';

import App from './cmp-app';

const mapStateToProps = (state, ownProps) => {
  const { city } = state.user;
  const { byTimestamp, byDate, allDate } = state.forecast;

  return {
    city,
    byTimestamp,
    byDate,
    allDate,
  };
};

const mapDispatchToProps = {
  getLocation,
  getForecast,
  setLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
