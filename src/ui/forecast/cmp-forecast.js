import React from 'react';
import Swiper from 'react-id-swiper';

import './forecast.scss';

const COLORS = [];

class Forecast extends React.Component {
  render() {
    return (
      <div className="forecast">
        <div className="forecast__inner">
          <div className="forecast__title">Next 4 days</div>
          <div className="forecast__items">
            {[10, 20, 30, 40, 50].map(item => {
              return (
                <div className="forecast__item" key={item}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;
