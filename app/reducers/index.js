import { combineReducers } from 'redux';
import * as navReducer from './nav';
import * as loginReducer from './login';
import * as gamesReducer from './games';

export default combineReducers(Object.assign({},
  navReducer,
  loginReducer,
  gamesReducer,
));

