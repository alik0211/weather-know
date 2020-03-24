import { RSAA } from 'redux-api-middleware';
import { WEATHER_API_KEY, WEATHER_ROOT_API } from '../config';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

export const GET_FORECAST_REQUEST = 'GET_FORECAST_REQUEST';
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';
export const GET_FORECAST_FAILURE = 'GET_FORECAST_FAILURE';

export const getWeather = () => (dispatch, getState) => {
  const state = getState();

  const { loc, city } = state.user;
  const searchString = `appid=${WEATHER_API_KEY}&q=${city}&units=metric`;

  return dispatch({
    [RSAA]: {
      endpoint: `${WEATHER_ROOT_API}/weather?${searchString}`,
      method: 'GET',
      types: [GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE],
    },
  });
};

export const getForecast = () => (dispatch, getState) => {
  const state = getState();

  const { loc, city } = state.user;
  // const lat = loc.slice(0, 7)
  // const lon = loc.slice(8)
  // console.log(city)
  // console.log(loc)

  const searchString = `appid=${WEATHER_API_KEY}&q=${city}&units=metric`;
  //const searchString = `appid=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}&units=metric`;

  return dispatch({
    [RSAA]: {
      endpoint: `${WEATHER_ROOT_API}/forecast?${searchString}`,
      method: 'GET',
      types: [GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_FAILURE],
    },
  });
};
