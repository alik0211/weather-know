import { connect } from 'react-redux';
import Search from './cmp-search';
import { setLocation } from '../../../actions/user';
import { getForecast } from '../../../actions/forecast';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  setLocation: city => dispatch(setLocation(city)),
  getForecast: () => dispatch(getForecast()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
