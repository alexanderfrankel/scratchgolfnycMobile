import * as LoginActions from './login';
import * as SignUpActions from './signUp';
import * as GameActions from './games';

export const ActionCreators = Object.assign({},
  LoginActions,
  SignUpActions,
  GameActions,
);
