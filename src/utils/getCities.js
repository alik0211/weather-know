import queryString from 'query-string';
import { HERE_API_KEY, HERE_ROOT_API } from '../config';

function getCities(query) {
  const params = queryString.stringify({
    apiKey: HERE_API_KEY,
    resultType: 'city',
    query,
  });

  return fetch(`${HERE_ROOT_API}?${params}`).then(response => {
    return response.json();
  });
}

export default getCities;
