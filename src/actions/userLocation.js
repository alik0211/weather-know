// import { RSAA } from 'redux-api-middleware';
import { IPINFO_API_KEY, IPINFO_ROOT_API } from '../config';

export const GET_LOCATION_BY_IP_REQUEST = 'GET_LOCATION_BY_IP_REQUEST';
export const GET_LOCATION_BY_IP_SUCCESS = 'GET_LOCATION_BY_IP_SUCCESS';
export const GET_LOCATION_BY_IP_FAILURE = 'GET_LOCATION_BY_IP_FAILURE';

export const GET_LOCATION_FROM_NAVIGATOR_REQUEST =
  'GET_LOCATION_FROM_NAVIGATOR_REQUEST';
export const GET_LOCATION_FROM_NAVIGATOR_SUCCESS =
  'GET_LOCATION_FROM_NAVIGATOR_SUCCESS';
export const GET_LOCATION_FROM_NAVIGATOR_FAILURE =
  'GET_LOCATION_FROM_NAVIGATOR_FAILURE';

export const getLocationByIpRequest = isRequest => {
  return {
    type: GET_LOCATION_BY_IP_REQUEST,
    payload: isRequest,
  };
};

export const getLocationByIpSuccess = result => {
  return {
    type: GET_LOCATION_BY_IP_SUCCESS,
    payload: result,
  };
};

export const getLocationByIpFailure = isError => {
  return {
    type: GET_LOCATION_BY_IP_FAILURE,
    payload: isError,
  };
};

export const getLocationFromNavigatorRequest = isRequest => {
  return {
    type: GET_LOCATION_FROM_NAVIGATOR_REQUEST,
    payload: isRequest,
  };
};

export const getLocationFromNavigatorSuccess = coords => {
  return {
    type: GET_LOCATION_FROM_NAVIGATOR_SUCCESS,
    payload: coords,
  };
};

export const getLocationFromNavigatorFailure = isError => {
  return {
    type: GET_LOCATION_FROM_NAVIGATOR_FAILURE,
    payload: isError,
  };
};

export const getUserLocationFromIp = async () => {
  const { coords } = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {});
  });
  return coords;
};

export const getUserLocation = () => dispatch => {
  fetch(`${IPINFO_ROOT_API}?token=${IPINFO_API_KEY}`)
    .then(response => {
      if (!response.ok) {
        dispatch(getLocationByIpFailure(false));
        throw Error(response.statusText);
      }
      dispatch(getLocationByIpRequest(false));
      return response;
    })
    .then(response => response.json())
    .then(item => {
      dispatch(getLocationByIpFailure(false));
      dispatch(getLocationByIpSuccess(item));
    })
    .catch(() => {
      dispatch(getLocationByIpFailure(true));
      dispatch(getLocationFromNavigatorRequest(true));
      dispatch(getLocationFromNavigatorFailure(false));
      getUserLocationFromIp()
        .then(coords => {
          dispatch(getLocationFromNavigatorSuccess(coords));
          dispatch(getLocationFromNavigatorRequest(false));
        })
        .catch(error => {
          dispatch(getLocationFromNavigatorRequest(false));
          dispatch(getLocationFromNavigatorFailure(true));
        });
    });
};

// export const getLocationByIp = () => {
//   return {
//     [RSAA]: {
//       endpoint: `${IPINFO_ROOT_API}?token=${IPINFO_API_KEY}`,
//       method: 'GET',
//       types: [
//         GET_LOCATION_BY_IP_REQUEST,
//         GET_LOCATION_BY_IP_SUCCESS,
//         GET_LOCATION_BY_IP_FAILURE,
//       ],
//     },
//   };
// };
