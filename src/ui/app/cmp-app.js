import React, { Component } from 'react';
import Search from '../search/cnt-search';

import './app.css';

class App extends Component {
  componentDidMount() {
    const { getLocation, getForecast } = this.props;

    getLocation().then(() => {
      getForecast();
    });
  }

  render() {
    const { byTimestamp } = this.props;

    return (
      <div className="app">
        <Search />
        {byTimestamp &&
          Object.values(byTimestamp).map(item => {
            return (
              <div key={item.dt} className="forecast__day">
                <div>
                  data: {item.dt_txt.slice(0, item.dt_txt.indexOf(' '))}
                </div>
                <div>temp: {item.main.temp}</div>
                <div>feels_like: {item.main.feels_like}</div>
                <div>wind: {item.wind.speed}</div>
                <div>weather: {item.weather.description}</div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default App;
