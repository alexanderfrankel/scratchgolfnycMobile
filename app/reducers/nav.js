import { NavigationActions } from 'react-navigation';
import AppNavigator from '../navigation/AppNavigator';
import * as types from '../actions/types';

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams('Login');
const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams('Main');

console.log(ActionForLoggedOut)
console.log(ActionForLoggedIn)
const initialStateForLoggedOut = AppNavigator.router.getStateForAction(ActionForLoggedOut);
console.log(initialStateForLoggedOut)
const initialStateForLoggedIn = AppNavigator.router.getStateForAction(ActionForLoggedIn, initialStateForLoggedOut);
console.log(initialStateForLoggedIn)

const initialState = {
  stateForLoggedOut: initialStateForLoggedOut,
  stateForLoggedIn: initialStateForLoggedIn
}

export const nav = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN: {
      return initialState;
    }
    case types.LOGOUT: {
      return initialState;
    }
    case types.SIGNUP: {
      return {
        ...state,
        stateForLoggedOut: AppNavigator.router.getStateForAction(
          AppNavigator.router.getActionForPathAndParams('SignUp'),
          state.stateForLoggedOut
        )
      };
    }
    default:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          action,
          state.stateForLoggedIn
        )
      };
  }
};
