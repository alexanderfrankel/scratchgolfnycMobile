import { StackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

export const AppNavigator =  StackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  },
});
