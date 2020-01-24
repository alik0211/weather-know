import { GET_LOCATION_BY_IP_SUCCESS } from '../actions/locationByIp';

const initState = {};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_LOCATION_BY_IP_SUCCESS:
      const { city, loc } = action.payload;
      return {
        ...state,
        city: city,
        coord: loc,
      };
    default:
      return {
        ...state,
      };
  }
}
