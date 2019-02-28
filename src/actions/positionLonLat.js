import { RSAA } from 'redux-api-middleware';
import { API_KEY, ROOT_API } from '../config';

export const GET_FORECAST_BY_COORD_REQUEST = 'GET_FORECAST_BY_COORD_REQUEST';
export const GET_FORECAST_BY_COORD_SUCCESS = 'GET_FORECAST_BY_COORD_SUCCESS';
export const GET_FORECAST_BY_COORD_FAILURE = 'GET_FORECAST_BY_COORD_FAILURE';

export const getPositionByLonAndLat = getForecastByCoord => {
  const { lat, lon } = coord;

  const searchString = `appid=${API_KEY}&lat=${lat}&lon=${lon}`;

  return {
    [RSAA]: {
      endpoint: `${ROOT_API}/forecast/daily?${searchString}`,
      method: 'GET',
      types: [
        GET_FORECAST_BY_COORD_REQUEST,
        GET_FORECAST_BY_COORD_SUCCESS,
        GET_FORECAST_BY_COORD_FAILURE,
      ],
    },
  };
};
