import React from 'react';

import './forecast-day.scss';

export default function ForecastDay(props) {
  return (
    <div className="forecast-day">
      <div className="forecast-day__name">Monday</div>
      <time className="forecast-day__date">12 Feb</time>
      <div className="temp forecast-day__temp">
        <span className="temp__value">+7</span>
        <span className="temp__inut">&deg;</span>
      </div>
      <img
        className="forecast-day__icon"
        src={require('./ModSnowSwrsDay.png')}
        alt="cloud"
      />
    </div>
  );
}
