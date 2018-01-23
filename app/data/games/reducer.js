import * as actionTypes from './actionTypes';

export const searchedGames = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCHED_GAMES:
      let newState = {};
      action.games.forEach( (game) => {
        newState[game.id] = game
      });
      return newState;
    default:
      return state;
  }
};

export const gameCount = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCHED_GAMES:
      return action.games.length;
    default:
      return state;
  }
};
