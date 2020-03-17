import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Card from '../card/cmp-card';
import Arrow from './arrow.svg';
import getSkyClass from '../../utils/getSkyClass';
import './forecast-day.scss';

export default class ForecastDay extends React.Component {
  state = {
    full: false,
  };

  dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  handleClick = () => {
    this.setState({ full: !this.state.full });
  };

  render() {
    const { full } = this.state;
    const { item } = this.props;
    const day = new Date(item.dt_txt).getDay();
    const className = item ? getSkyClass(item.clouds.all) : '';
    return (
      <button
        className={`forecast-day ${className}`}
        onClick={this.handleClick}
      >
        <div className="forecast-day__header">
          <div className="forecast-day__column">
            <div className="forecast-day__dayName">{this.dayName[day]}</div>
            <CSSTransition
              in={full}
              appear={false}
              classNames="forecast-day__arrow"
              timeout={300}
            >
              <img className="forecast-day__arrow" src={Arrow} alt="arrow" />
            </CSSTransition>
          </div>
          <div className="forecast-day__column">
            <div className="forecast-day__icon">
              <img src="./weather-icon/icon.svg" />
            </div>
            <div className="forecast-day__max term">
              <div className="term__value">
                &nbsp;{Math.round(item.max)}&deg;
              </div>
              <div className="term__label term__label-m">max</div>
            </div>
            <div className="forecast-day__min term">
              <div className="term__value">
                &nbsp;{Math.round(item.min)}&deg;
              </div>
              <div className="term__label term__label-m">min</div>
            </div>
          </div>
        </div>

        <CSSTransition
          in={full}
          appear={false}
          timeout={300}
          unmountOnExit
          classNames="forecast-day__full"
        >
          <div
            className={`forecast-day__full ${className}`}
            onClick={this.handleClick}
          >
            <div className="forecast-day__full-inner">
              <Card className={`forecast-day__card ${className}`} data={item} />
            </div>
          </div>
        </CSSTransition>
      </button>
    );
  }
}
