import { store } from 'scratchgolfnycMobile/app/store';
import * as api from './api';
import * as actionCreators from './actions';

export const authenticate = (email, password) => {
  return api.authenticate(email, password)
  .then(onRequestSuccess)
  .catch(onRequestFailed);
};

export const refreshToken = () => {
  return api.refresh();
};

const onRequestSuccess = (response) => {
  store.dispatch(actionCreators.update({token: response.token}));
};

const onRequestFailed = (exception) => {
  clearSession();
  throw exception;
}

const clearSession = () => {
}
