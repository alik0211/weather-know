import { GET_FORECAST_BY_COORD_SUCCESS } from '../actions/forecast';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FORECAST_BY_COORD_SUCCESS:
      const { city, list } = action.payload;

      return {
        ...state,
        [city.id]: {
          ...state[city.id],
          ...list.reduce((accumulator, item) => {
            return {
              ...accumulator,
              [item.dt]: item
            };
          }, {})
        }
      };

    default:
      return state;
  }
}
