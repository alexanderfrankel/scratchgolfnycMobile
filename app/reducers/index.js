import { combineReducers } from 'redux';
import * as navReducer from './nav';
import * as gamesReducer from './games';

export default combineReducers(Object.assign({},
  navReducer,
  gamesReducer,
));

