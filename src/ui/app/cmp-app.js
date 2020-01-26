import React, { Component } from 'react';
import Search from './components/cnt-search';

class App extends Component {
  componentDidMount() {
    const { getLocation, getForecast } = this.props;

    getLocation().then(() => {
      getForecast();
    });
  }

  render() {
    const { city } = this.props;

    return (
      <div className="app">
        <Search city={city} />
      </div>
    );
  }
}

export default App;
