import * as actionTypes from './actionTypes'

export const session = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE:
      return action.session;
    default:
      return state;
  }
};
