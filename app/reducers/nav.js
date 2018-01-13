import { NavigationActions } from 'react-navigation';


import { NavigationStack } from 'scratchgolfnycMobile/app/screens/Main';
import * as types from '../actions/types';

export const nav = (state, action) => {
  const nextState = NavigationStack.router.getStateForAction(action, state);
  return nextState || state;
}

