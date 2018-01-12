import { fetchApi } from './../api'

const endPoints = {
  authenticate: '/login',
  revoke: '/users/auth/revoke',
  refresh: '/users/auth/refresh',
};

export const refresh = (token, user) => fetchApi(endPoints.refresh, { token, user }, 'post', {
  'Client-ID': 'jfakdjfl',
  Authorization: null,
});
