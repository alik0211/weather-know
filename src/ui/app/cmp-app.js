import React, { Component } from 'react';

import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

import Search from '../search/cnt-search';
import Current from '../current/cmp-current';
import ForecastDay from '../forcast-day/cmp-forecast-day';

import './app.scss';

class App extends Component {
  state = {
    full: false,
    item: null,
    colors: ['#000', '#00f', '#0f0', '#f00', '#fff'],
  };

  onClickForecastDay = item => {
    this.setState({ full: !this.state.full, item: item });
  };

  componentDidMount() {
    const { getLocation, getForecast } = this.props;

    getLocation().then(() => {
      getForecast();
    });
  }

  render() {
    const { full, item, colors } = this.state;
    const { byTimestamp, byDate, allDate } = this.props;

    const params = {
      slidesPerView: 'auto',
      freeMode: true,
    };

    return (
      <div className="app">
        <div className="">Balashov</div>
        <Current />
        {full && (
          <ForecastDay
            full={full}
            data={byDate[item]}
            onClick={this.onClickForecastDay}
          />
        )}
        <div className="forecast-container">
          <Swiper {...params}>
            {allDate.map(item => {
              return (
                <div className="div" key={item}>
                  <ForecastDay
                    data={byDate[item]}
                    color={colors.pop()}
                    onClick={() => this.onClickForecastDay(item)}
                  />
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    );

    // return (
    //   <div className="app">
    //     <Search />
    //     {byTimestamp &&
    //       Object.values(byTimestamp).map(item => {
    //         return (
    //           <div key={item.dt} className="forecast__day">
    //             <div>
    //               data: {item.dt_txt.slice(0, item.dt_txt.indexOf(' '))}
    //             </div>
    //             <div>temp: {item.main.temp}</div>
    //             <div>feels_like: {item.main.feels_like}</div>
    //             <div>wind: {item.wind.speed}</div>
    //             <div>weather: {item.weather.description}</div>
    //           </div>
    //         );
    //       })}
    //   </div>
    // );
  }
}

export default App;
