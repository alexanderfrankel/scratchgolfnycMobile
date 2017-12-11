import Navigator from '../config/router';

const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Home'));

export const nav = (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
}
