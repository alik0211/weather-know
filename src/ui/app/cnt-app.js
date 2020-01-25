import { connect } from 'react-redux';
import { getUserLocation } from '../../actions/userLocation';

import App from './cmp-app';

const mapStateToProps = (state, ownProps) => {
  const { coords, city } = state.userLocation;
  return {
    coords,
    city,
  };
};

const mapDispatchToProps = {
  getUserLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
