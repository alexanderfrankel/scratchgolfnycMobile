import { StackNavigator, TabNavigator } from 'react-navigation';

import SignIn from './screens/App/screens/SignIn';
import SignUp from './screens/App/screens/SignIn/screens/SignUp';
import Home from './screens/App/screens/Home';
import Profile from './screens/App/screens/Profile';

const Login = StackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
});

const Main = TabNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
});

export default StackNavigator(
  {
    Login: { screen: Login },
    Main: { screen: Main }
  },
  {
    headerMode: 'none',
  },
);
