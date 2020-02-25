import { GET_FORECAST_SUCCESS } from '../actions/forecast';

const initialState = {
  byTimestamp: {},
  byDate: {},
  allTimestamp: [],
  allDate: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FORECAST_SUCCESS:
      const { list } = action.payload;

      const forecastByDay = list.filter(item => item.dt_txt.includes('12:00'));
      let dataSet = new Set();
      let timeSet = new Set();
      return {
        ...state,
        // byTimestamp: {
        //   ...forecastByDay.reduce((accumulator, item) => {
        //     return {
        //       ...accumulator,
        //       [item.dt]: item,
        //     };
        //   }, {}),
        // },
        // allTimestamp: forecastByDay.map(item => item.dt),
        byDate: {
          ...list.reduce((acc, item) => {
            const date = item.dt_txt.slice(0, 10);
            dataSet.add(date);
            return {
              ...acc,
              [date]: {
                ...list
                  .filter(item => item.dt_txt.includes(date))
                  .reduce((acc, item) => {
                    const time = item.dt_txt.slice(11);
                    timeSet.add(time);
                    return {
                      ...acc,
                      [time]: item,
                    };
                  }, {}),
                allTime: Array.from(timeSet).sort(),
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

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case GET_FORECAST_SUCCESS:
//       const { list } = action.payload;
//       console.log(list)
//       const forecastByDay = list.filter(item => item.dt_txt.includes('12:00'));
//       return {
//         ...state,
//         byTimestamp: {
//           ...forecastByDay.reduce((accumulator, item) => {
//             return {
//               ...accumulator,
//               [item.dt]: item,
//             };
//           }, {}),
//         },
//         allTimestamp: forecastByDay.map(item => item.dt),
//       };

//     default:
//       return state;
//   }
// }
