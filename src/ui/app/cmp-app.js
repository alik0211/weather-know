import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    const { getLocation, getForecast } = this.props;

    getLocation().then(() => {
      getForecast();
    });
  }

  render() {
    const { city } = this.props;

    return <div className="app">{city}</div>;
  }
}

export default App;
