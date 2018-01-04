import { AppNavigator } from '../navigation/AppNavigator';
import * as types from '../actions/types';

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams('Login');
const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams('Home');

const stateForLoggedOut = AppNavigator.router.getStateForAction(ActionForLoggedOut);
const stateForLoggedIn = AppNavigator.router.getStateForAction(ActionForLoggedIn);

const initialState = { stateForLoggedOut, stateForLoggedIn }

export const nav = (state = initialState, action) => {
  switch (action.type) {
    case "@@redux/INIT":
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(ActionForLoggedIn, stateForLoggedOut)
      };

    case types.LOGIN:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(ActionForLoggedIn, stateForLoggedOut)
      }

    case types.LOGOUT:
      return {
        ...state,
        stateForLoggedOut: AppNavigator.router.getStateForAction(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "login" })]
          })
        )
      };

    default:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(action, state.stateForLoggedIn)
      };
  }
};
