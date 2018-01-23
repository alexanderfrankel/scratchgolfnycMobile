import apiConfig from './config';

export const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}) => {
  return fetch(`${apiConfig.url}${endPoint}`, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(payload),
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  })
};
