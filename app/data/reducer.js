import { combineReducers } from 'redux';
import * as navReducer from './nav/reducer';
import * as gamesReducer from './games/reducer';

export default combineReducers(Object.assign({},
  navReducer,
  gamesReducer,
));

