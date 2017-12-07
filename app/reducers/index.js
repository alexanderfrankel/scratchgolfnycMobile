import { combineReducers } from 'redux';
import { navigationReducer } from './navigation';
import * as gamesReducer from './games';

export default combineReducers(Object.assign({},
  gamesReducer,
));

