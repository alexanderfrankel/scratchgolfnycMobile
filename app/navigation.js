import { StackNavigator } from 'react-navigation';

import Login from './screens/Main/screens/Login';
import SignUp from './screens/Main/screens/Login/screens/SignUp';

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

export default StackNavigator({
  Start: {
    screen: Start,
  },
});
