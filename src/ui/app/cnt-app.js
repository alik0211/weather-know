import { connect } from 'react-redux';
import { getForecastByCoord } from '../../actions/forecast';

import App from './cmp-app';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = {
  getForecastByCoord,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
