import { RSAA } from 'redux-api-middleware';
import { WEATHER_API_KEY, WEATHER_ROOT_API } from '../config';

export const GET_FORECAST_BY_COORD_REQUEST = 'GET_FORECAST_BY_COORD_REQUEST';
export const GET_FORECAST_BY_COORD_SUCCESS = 'GET_FORECAST_BY_COORD_SUCCESS';
export const GET_FORECAST_BY_COORD_FAILURE = 'GET_FORECAST_BY_COORD_FAILURE';

export const getForecastByCoord = coord => {
  const { lat, lon } = coord;

  const searchString = `appid=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}`;

  return {
    [RSAA]: {
      endpoint: `${WEATHER_ROOT_API}/forecast/daily?${searchString}`,
      method: 'GET',
      types: [
        GET_FORECAST_BY_COORD_REQUEST,
        GET_FORECAST_BY_COORD_SUCCESS,
        GET_FORECAST_BY_COORD_FAILURE,
      ],
    },
  };
};
