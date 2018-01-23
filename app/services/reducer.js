import { combineReducers } from 'redux';
import * as sessionReducer from './session';

export default combineReducers(Object.assign({},
  sessionReducer,
));

