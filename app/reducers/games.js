import * as types from '../actions/types';

export const searchedGames = (state = null, action) => {
  switch (action.type) {
    case types.SET_SEARCHED_GAMES:
      return action.games;
    default:
      return state;
  }
}

export const gameCount = (state = 0, action) => {
  switch (action.type) {
    case types.SET_SEARCHED_GAMES:
      return action.games.length();
    default:
      return state;
  }
}
