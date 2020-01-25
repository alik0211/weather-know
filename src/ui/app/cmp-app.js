import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    const { getUserLocation } = this.props;
    getUserLocation();
  }

  render() {
    const { coords, city } = this.props;
    if (city) {
      return <div className="app">{city}</div>;
    }

    return <div className="app">{`${coords.lat} ${coords.lon}`}</div>;
  }
}

export default App;
