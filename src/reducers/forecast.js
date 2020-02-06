import { GET_FORECAST_SUCCESS } from '../actions/forecast';

const initialState = {
  byTimestamp: {},
  allTimestamp: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FORECAST_SUCCESS:
      const { list } = action.payload;
      const forecastByDay = list.filter(item => item.dt_txt.includes('12:00'));
      return {
        ...state,
        byTimestamp: {
          ...forecastByDay.reduce((accumulator, item) => {
            return {
              ...accumulator,
              [item.dt]: item,
            };
          }, {}),
        },
        allTimestamp: forecastByDay.map(item => item.dt),
      };

    default:
      return state;
  }
}
