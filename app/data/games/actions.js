import * as actionTypes from './actionTypes';

export const setSearchedGames = (games) => {
  return {
    type: actionTypes.SET_SEARCHED_GAMES,
    games,
  };
}

export const addGame = () => {
  return {
    type: actionTypes.ADD_GAME,
  };
}
