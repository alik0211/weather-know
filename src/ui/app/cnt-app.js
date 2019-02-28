import { connect } from 'react-redux';
import { getUserLocation } from '../../actions/user';

import App from './cmp-app';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = {
  getUserLocation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
