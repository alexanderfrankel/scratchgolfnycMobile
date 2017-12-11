import * as types from './types';

export const setSearchedGames = (games) => {
  return {
    type: types.SET_SEARCHED_GAMES,
    games,
  };
}

export const addGame = () => {
  return {
    type: types.ADD_GAME,
  };
}
