import React from 'react';

import './forecast-hour.scss';

export default function ForecastHour(props) {
  const temp =
    Math.round(props.data.main.temp) > 0
      ? `+${Math.round(props.data.main.temp)}`
      : Math.round(props.data.main.temp);
  const time = props.data.dt_txt.slice(11, 16);

  return (
    <div className="forecast-hour">
      <time className="forecast-hour__time">{time}</time>
      <img
        className="forecast-hour__img"
        src={require('./ModSnowSwrsDay.png')}
        alt="weather"
      />
      <div>{temp}&deg;</div>
    </div>
  );
}
