import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    const { getUserLocation } = this.props;

    getUserLocation();
  }

  render() {
    return <div className="app">App</div>;
  }
}

export default App;
