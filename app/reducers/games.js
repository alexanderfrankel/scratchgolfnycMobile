import * as types from '../actions/types';

export const search = (state = null, action) => {
  return state;
}

export const gameCount = (state = 0, action) => {
  switch (action.type) {
    case types.ADD_GAME:
      return state + 1;
    default:
      return state;
  }
}
