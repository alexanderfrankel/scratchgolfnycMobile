import * as actionTypes from './actionTypes';

export const update = (session) => {
  return {
    type: actionTypes.UPDATE,
    session
  };
}
