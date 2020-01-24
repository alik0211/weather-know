import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    const { getUserLocation } = this.props;
    getUserLocation();
  }

  render() {
    const { sity } = this.props;
    return <div className="app">{`${sity}`}</div>;
  }
}

export default App;
