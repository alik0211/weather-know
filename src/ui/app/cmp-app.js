import React, { Component } from 'react';

let latitude = 0;
let longitude = 0;

class App extends Component {
  // getGeoData() {
  //   const url =
  //     'https://api.openweathermap.org/data/2.5/weather?lat=50.431782&lon=30.516382&appid=e355c588a9911a706b20a89a2fd6f8e5';
  //   // "http://131.247.210.6:8000/Olena";
  //   fetch(url)
  //     .then(data => {
  //       return data.json();
  //     })
  //     .then(res => {
  //       console.log(res);
  //     });
  // }

  getGeoData() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;

      console.log('Your current position is:');

      console.log(`More or less ${crd.accuracy} meters.`);

      latitude = crd.latitude;
      longitude = crd.longitude;

      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  componentDidMount() {
    const { getForecastByCoord } = this.props;

    this.getGeoData();

    getForecastByCoord({
      lat: latitude,
      lon: longitude,
    });
  }
  render() {
    return <div className="app">App1</div>;
  }
}

export default App;
