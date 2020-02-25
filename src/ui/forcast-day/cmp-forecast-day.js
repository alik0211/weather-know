import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

import ForecastHour from '../forecast-hour/foreact-hour';

import './forecast-day.scss';

export default class ForecastDay extends React.Component {
  state = {
    color: '',
  };
  monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Oct',
    'Dec',
  ];
  dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  componentDidMount() {
    this.setState({ color: this.props.color });
  }

  render() {
    const { onClick, full = false, data } = this.props;
    const { color } = this.state;
    const className = full ? 'forecast-day-full' : 'forecast-day';
    const time = data.allTime.includes('12:00:00')
      ? '12:00:00'
      : data[data.allTime[0]].dt_txt.slice(11);
    const d = new Date(data[time].dt_txt);
    const month = this.monthName[d.getMonth()];
    const date = d.getDate() < 10 ? `0${d.getDate()}` : `${d.getDate()}`;
    const day = this.dayName[d.getDay()];
    const temp =
      Math.round(data[time].main.temp) > 0
        ? `+${Math.round(data[time].main.temp)}`
        : Math.round(data[time].main.temp);

    const params = {
      slidesPerView: 'auto',
      spaceBetween: 10,
      freeMode: true,
    };

    return (
      <div
        className={className}
        style={{ background: color }}
        onClick={() => onClick(color)}
      >
        <div className={`${className}__name`}>{day}</div>
        <time className={`${className}__date`}>{`${date} ${month}`}</time>
        <div className={`temp ${className}__temp`}>
          <span className="temp__value">{temp}</span>
          <span className="temp__inut">&deg;</span>
        </div>
        <img
          className={`${className}__icon`}
          src={require('./ModSnowSwrsDay.png')}
          alt="cloud"
        />
        {full && (
          <div
            className="forecast-hours-container"
            onClick={evt => {
              evt.stopPropagation();
            }}
          >
            <Swiper {...params}>
              {data.allTime.map(item => {
                return (
                  <div className="forecast-hour" key={item}>
                    <ForecastHour data={data[item]} />
                  </div>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
    );
  }
}
