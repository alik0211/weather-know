import { IPINFO_API_KEY, IPINFO_ROOT_API } from '../config';

export const SET_LOCATION = 'SET_LOCATION';

export const getLocation = () => dispatch => {
  const city = localStorage.getItem('city');

  if (city) {
    dispatch(
      setLocation({
        city,
      })
    );

    return Promise.resolve();
  }

  return fetch(`${IPINFO_ROOT_API}?token=${IPINFO_API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('IPINFO_ERROR');
      }

      return response.json();
    })
    .then(data => {
      const { city, loc } = data;

      return dispatch(
        setLocation({
          city,
          loc,
        })
      );
    })
    .catch(error => {
      console.log(`error:`, error);
    });
};

export const setLocation = location => {
  localStorage.setItem('city', location.city);

  return {
    type: SET_LOCATION,
    payload: location,
  };
};
