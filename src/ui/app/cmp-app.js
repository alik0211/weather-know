import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    const { getForecastByCoord } = this.props;

    getForecastByCoord({
      lat: 35,
      lon: 139,
    });
  }
  render() {
    return <div className="app">App1</div>;
  }
}

export default App;
