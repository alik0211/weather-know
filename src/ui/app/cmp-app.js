import React, { Component } from 'react';

import 'swiper/swiper.scss';

import Search from '../search/cnt-search';
import ForecastDay from '../forecast-day/cmp-forecast-day';
import Card from '../card/cmp-card';
import getSkyClass from '../../utils/getSkyClass';

import './app.scss';

class App extends Component {
  componentDidMount() {
    const { getLocation, getForecast, getWeather } = this.props;

    getLocation().then(() => {
      getWeather();
      getForecast();
    });
  }

  render() {
    const { byDate, allDate, fact } = this.props;
    console.log(fact);
    const className = fact ? getSkyClass(fact.clouds.all) : '';
    return (
      <div className="app">
        <div className={`header ${className}`}>
          <div className="header__inner">
            <Search />
            {fact && <Card className="header__card" data={fact} />}
          </div>
        </div>

        <div className="forecast">
          {allDate.map(item => (
            <ForecastDay key={byDate[item].dt} item={byDate[item]} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
