import { RSAA } from 'redux-api-middleware';
import { WEATHER_API_KEY, WEATHER_ROOT_API } from '../config';

export const GET_FORECAST_REQUEST = 'GET_FORECAST_REQUEST';
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';
export const GET_FORECAST_FAILURE = 'GET_FORECAST_FAILURE';

export const getForecast = () => (dispatch, getState) => {
  const state = getState();

  const { city } = state.user;

  const searchString = `appid=${WEATHER_API_KEY}&q=${city}`;

  return dispatch({
    [RSAA]: {
      endpoint: `${WEATHER_ROOT_API}/forecast?${searchString}`,
      method: 'GET',
      types: [GET_FORECAST_REQUEST, GET_FORECAST_SUCCESS, GET_FORECAST_FAILURE],
    },
  });
};
