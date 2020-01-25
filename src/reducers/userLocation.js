import {
  GET_LOCATION_BY_IP_REQUEST,
  GET_LOCATION_BY_IP_SUCCESS,
  GET_LOCATION_BY_IP_FAILURE,
  GET_LOCATION_FROM_NAVIGATOR_REQUEST,
  GET_LOCATION_FROM_NAVIGATOR_SUCCESS,
  GET_LOCATION_FROM_NAVIGATOR_FAILURE,
} from '../actions/userLocation';

const initState = {
  city: null,
  coords: {
    lat: 0,
    lon: 0,
  },
  isRequest: false,
  isError: false,
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_LOCATION_BY_IP_SUCCESS:
      console.log(action.payload);
      const { city, loc } = action.payload;
      const [lat, lon] = loc.split(',');
      return {
        ...state,
        city: city,
        coords: {
          lat: +lat,
          lon: +lon,
        },
      };
    case GET_LOCATION_FROM_NAVIGATOR_REQUEST:
      return {
        ...state,
        isRequest: action.payload,
      };
    case GET_LOCATION_FROM_NAVIGATOR_SUCCESS:
      const { latitude, longitude } = action.payload;
      return {
        ...state,
        city: null,
        coords: {
          lat: latitude,
          lon: longitude,
        },
      };
    case GET_LOCATION_FROM_NAVIGATOR_FAILURE:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
