import * as types from './types';
import Api from '../lib/api'

export const fetchGames = (keywords) => {
  return (dispatch, getState) => {

    const params = [
      `keywords=${encodeURIComponent(keywords)}`,
    ].join('&');

    console.log(params);
    return Api.get(`/games?${params}`).then((response) => {
      dispatch(setSearchedGames(response));
    }).catch((error) => {
      console.log(error);
    })
  };
}

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
