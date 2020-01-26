import { GET_FORECAST_SUCCESS } from '../actions/forecast';

const initialState = {
  byTimestamp: {},
  allTimestamp: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FORECAST_SUCCESS:
      const { list } = action.payload;

      return {
        ...state,
        byTimestamp: {
          ...list.reduce((accumulator, item) => {
            return {
              ...accumulator,
              [item.dt]: item,
            };
          }, {}),
        },
        allTimestamp: list.map(item => item.dt),
      };

    default:
      return state;
  }
}
