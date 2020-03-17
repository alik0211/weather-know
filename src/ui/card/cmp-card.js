import React from 'react';
import './card.scss';

export default class Card extends React.Component {
  render() {
    const { className, data } = this.props;
    return (
      <div className={`${className} card`}>
        <div className="card__weather">
          <div className="card__temp">{Math.round(data.main.temp)}&deg;C</div>
          <div className="card__condition">{data.weather[0].description}</div>
          <div className="card__wind term">
            <span className="term__label">Wind: </span>
            <span className="term__value">
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          <div className="card__clouds term">
            <span className="term__label">Clouds: </span>
            <span className="term__value">{data.clouds.all}%</span>
          </div>
          <div className="card__humidity term">
            <span className="term__label">Humidity: </span>
            <span className="term__value">{data.main.humidity}%</span>
          </div>
        </div>
        <div className="card__img">
          <img src="./weather-icon/icon.svg" />
        </div>
      </div>
    );
  }
}
