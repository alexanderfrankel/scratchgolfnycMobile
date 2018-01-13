import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import { LoginButton } from 'react-native-fbsdk';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
} = ReactNative

import { ActionCreators } from 'scratchgolfnycMobile/app/actions';
import * as session from 'scratchgolfnycMobile/app/services/session';
import styles from './styles';

class Login extends Component {
  onPressLogin() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('./images/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.signInContainer}>
          <TextInput placeholder={'Email'} style={styles.input}/>
          <TextInput placeholder={'Password'} style={styles.input}/>
          <TouchableHighlight onPress={() => { this.props.login() } }style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <Text>Forgot your login details? Get help signing in.</Text>
          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("Login failed with error: " + result.error);
                } else if (result.isCancelled) {
                  alert("Login was cancelled");
                } else {
                  this.props.login();
                }
              }
            }
            onLogoutFinished={() => alert("User logged out")}
          />
        </View>

        <View style={styles.extraDetails}>
          <Text>Don't have an account? </Text>
          <Text onPress={() => {this.props.navigation.navigate('SignUp')}}>
            <Text>Sign up.</Text>
          </Text>
        </View>
      </View>
    )
  };
};

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => { return {} }, mapDispatchToProps)(Login);
