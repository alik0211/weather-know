import { connect } from 'react-redux';
import { getLocation } from '../../actions/user';
import { getForecast } from '../../actions/forecast';

import App from './cmp-app';

const mapStateToProps = (state, ownProps) => {
  const { city } = state.user;

  return {
    city,
  };
};

const mapDispatchToProps = {
  getLocation,
  getForecast,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
