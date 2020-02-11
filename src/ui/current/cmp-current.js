import React from 'react';

import './current.scss';

export default function Current(props) {
  return (
    <div className="fact">
      <div className="fact__label">Current</div>
      <div className="temp fact__temp">
        <span className="temp__value">7</span>
        <span className="temp__inut">&deg;</span>
      </div>
      <div className="fact__condition">Broken Clouds</div>
      <div className="fact__props">
        <div className="fact__props-wrap">
          <div className="term fact__humidity">
            <div className="term__label">Humidity: </div>
            <div className="term__value">65%</div>
          </div>
          <div className="term fact__wind-speed">
            <div className="term__label">Wind: </div>
            <div className="term__value">5 m/c</div>
          </div>
          <div className="term fact__feelings">
            <div className="term__label">Feelings: </div>
            <div className="term__value">
              <div className="temp">
                <span className="temp__value">7</span>
                <span className="temp__inut">&deg;</span>
              </div>
            </div>
          </div>
        </div>
        <img
          className="fact__img"
          src={require(`./ModSnowSwrsDay.png`)}
          alt="clouds"
        />
      </div>
    </div>
  );
}