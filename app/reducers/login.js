import * as types from '../actions/types';

export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN:
      return true;
    case types.LOGOUT:
      return false;
    default:
      return state;
  }
};
