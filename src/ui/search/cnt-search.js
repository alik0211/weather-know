import { connect } from 'react-redux';
import { setLocation } from '../../actions/user';
import { getForecast } from '../../actions/forecast';

import Search from './cmp-search';

const mapStateToProps = (state, ownProps) => {
  const { city } = state.user;

  return {
    city,
  };
};

const mapDispatchToProps = { setLocation, getForecast };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
