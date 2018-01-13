import { NavigationActions } from 'react-navigation';

import Navigation from 'scratchgolfnycMobile/app/navigation';

export const nav = (state, action) => {
  const nextState = Navigation.router.getStateForAction(action, state);
  return nextState || state;
}

