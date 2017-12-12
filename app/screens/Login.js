import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TouchableHighlight
} = ReactNative

class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        <TouchableHighlight onPress={ () => { this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'Home' })) } }>
          <Text>Navigate to Home</Text>
        </TouchableHighlight>
      </View>
    )
  };
};

export default Login;

