import { connect } from 'react-redux';
import { setLocation } from '../../actions/user';
import { getForecast, getWeather } from '../../actions/forecast';

import Search from './cmp-search';

const mapStateToProps = state => {
  const { city } = state.user;
  return {
    city,
  };
};

const mapDispatchToProps = { setLocation, getForecast, getWeather };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
