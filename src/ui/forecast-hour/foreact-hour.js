import React from 'react';

import './forecast-hour.scss';

export default function ForecastHour() {
  return (
    <div className="forecast-hour">
      <time className="forecast-hour__time">01:00</time>
      <img
        className="forecast-hour__img"
        src={require('./ModSnowSwrsDay.png')}
        alt="weather"
      />
      <div>7&deg;</div>
    </div>
  );
}
