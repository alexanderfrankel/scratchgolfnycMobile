import { NavigationActions } from 'react-navigation';
import AppNavigator from '../navigation/AppNavigator';
import * as types from '../actions/types';

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams('Login');
const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams('Main');

const stateForLoggedOut = AppNavigator.router.getStateForAction(ActionForLoggedOut);
const stateForLoggedIn = AppNavigator.router.getStateForAction(ActionForLoggedIn, stateForLoggedOut);

const initialState = { stateForLoggedOut, stateForLoggedIn }

export const nav = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(action, state.stateForLoggedIn)
      };
  }
};
