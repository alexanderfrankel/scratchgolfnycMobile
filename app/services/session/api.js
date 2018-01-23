import { fetchApi } from './../api'

const endPoints = {
  authenticate: '/sessions',
  revoke: '/sessions/revoke',
  refresh: '/sessions/refresh',
};

export const authenticate = (email, password) => {
  return fetchApi(endPoints.authenticate,
    { 'session': { 'email': email, 'password': password } },
    'post',
  );
};

export const refresh = (token, user) => fetchApi(endPoints.refresh, { token, user }, 'post', {
  'Client-ID': 'jfakdjfl',
  Authorization: null,
});
