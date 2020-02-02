module.exports = {
  IPINFO_API_KEY: process.env.REACT_APP_IPINFO_API_KEY,
  IPINFO_ROOT_API: 'https://ipinfo.io/geo',

  WEATHER_API_KEY: process.env.REACT_APP_WEATHER_API_KEY,
  WEATHER_ROOT_API: 'https://api.openweathermap.org/data/2.5',

  DADATA_API_KEY: process.env.REACT_APP_DADATA_API_KEY,
  DADATA_ROOT_API:
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',

  HERE_API_KEY: process.env.REACT_APP_HERE_API_KEY,
  HERE_ROOT_API:
    'https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json',
};
