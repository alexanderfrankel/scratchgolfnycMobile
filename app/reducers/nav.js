import { NavigationActions } from 'react-navigation';
import AppNavigator from '../navigation/AppNavigator';
import * as types from '../actions/types';

export const nav = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

