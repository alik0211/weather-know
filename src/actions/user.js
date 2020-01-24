//import { getForecastByCoord } from './forecast';
import { getLocationByIp } from './locationByIp';

export const getUserLocation = () => dispatch => {
  dispatch(getLocationByIp());
};

// export const getUserLocation = () => (dispatch, getState) => {
//   const handleSuccess = position => {
//     const { latitude, longitude } = position.coords;

//     dispatch(
//       getForecastByCoord({
//         lat: latitude,
//         lon: longitude,
//       })
//     );
//   };

//   navigator.geolocation.getCurrentPosition(handleSuccess, () => {}, {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   });
// };
