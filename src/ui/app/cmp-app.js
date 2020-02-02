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
    const { city, byTimestamp } = this.props;

    return (
      <div className="app">
        <Search />
        {byTimestamp &&
          Object.entries(byTimestamp)
            .filter(item => item[1].dt_txt.includes('12:00'))
            .map(item => {
              return (
                <div key={item[0]} className="forecast__day">
                  <div>
                    data: {item[1].dt_txt.slice(0, item[1].dt_txt.indexOf(' '))}
                  </div>
                  <div>temp: {item[1].main.temp}</div>
                  <div>feels_like: {item[1].main.feels_like}</div>
                  <div>wind: {item[1].wind.speed}</div>
                  <div>weather: {item[1].weather[0].description}</div>
                </div>
              );
            })}
      </div>
    );
  }
}

export default App;
