import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import SignUp from '../screens/SignUp';

const Start = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "SignUp",
    }
  },
})

const Main = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      title: "Home",
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      title: "Profile",
    },
  },
});

export default StackNavigator({
  Start: {
    screen: Start,
  },
});
