import { connect } from 'react-redux';
import Search from './cmp-search';
import { setLocation } from '../../../actions/user';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  setLocation: city => dispatch(setLocation(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
