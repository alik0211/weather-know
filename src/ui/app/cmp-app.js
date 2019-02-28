import React, { Component } from 'react';

class App extends Component {
  state = {
    number: 1,
  };
  getPositionByLonAndLat(getForecastByCoord) {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(position) {
      const coordinates = position.coords;
      const latitude = coordinates.latitude;
      const longitude = coordinates.longitude;

      getForecastByCoord({
        lat: latitude,
        lon: longitude,
      });
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  componentDidMount() {
    const { getForecastByCoord } = this.props;
    this.getPositionByLonAndLat(getForecastByCoord);
  }

  render() {
    return <div className="app">App{this.state.number} </div>;
  }
}

export default App;
