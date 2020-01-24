import { RSAA } from 'redux-api-middleware';
import { IPINFO_API_KEY, IPINFO_ROOT_API } from '../config';

export const GET_LOCATION_BY_IP_REQUEST = 'GET_LOCATION_BY_IP_REQUEST';
export const GET_LOCATION_BY_IP_SUCCESS = 'GET_LOCATION_BY_IP_SUCCESS';
export const GET_LOCATION_BY_IP_FAILURE = 'GET_LOCATION_BY_IP_FAILURE';

export const getLocationByIp = () => {
  return {
    [RSAA]: {
      endpoint: `${IPINFO_ROOT_API}?token=${IPINFO_API_KEY}`,
      method: 'GET',
      types: [
        GET_LOCATION_BY_IP_REQUEST,
        GET_LOCATION_BY_IP_SUCCESS,
        GET_LOCATION_BY_IP_FAILURE,
      ],
    },
  };
};
