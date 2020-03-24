import { GET_FORECAST_SUCCESS, GET_WEATHER_SUCCESS } from '../actions/forecast';

const initialState = {
  fact: null,
  byTimestamp: {},
  byDate: {},
  allTimestamp: [],
  allDate: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        fact: action.payload,
      };
    case GET_FORECAST_SUCCESS:
      const { list } = action.payload;
      let dataSet = new Set();
      return {
        ...state,
        byDate: {
          ...list.reduce((acc, item) => {
            const date = item.dt_txt.slice(0, 10);
            dataSet.add(date);
            return {
              ...acc,
              [date]: {
                ...list.filter(item =>
                  item.dt_txt.includes(`${date} 12:00:00`)
                )[0],
                ...list
                  .filter(item => item.dt_txt.includes(date))
                  .reduce(
                    (prev, item) => {
                      return {
                        max: Math.max(item.main.temp_max, prev.max),
                        min: Math.min(item.main.temp_min, prev.min),
                      };
                    },
                    { min: Number.MAX_VALUE, max: Number.MIN_VALUE }
                  ),
              },
            };
          }, {}),
        },
        allDate: Array.from(dataSet).slice(1, 5),
      };
    default:
      return state;
  }
}
