import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import * as session from 'scratchgolfnycMobile/app/services/session';
import styles from './styles';

class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

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
          <TouchableHighlight onPress={() => {this.props.navigation.navigate('Home')} }style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>

          <View style={styles.signInHelp}>
            <Text>Forgot your login details? </Text>
            <Text onPress={ () => { this.props.navigation.navigate('Help') } }>
              <Text>Get help signing in.</Text>
            </Text>
          </View>

          <LoginButton
            publishPermissions={ ["publish_actions"] }
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("Login failed with error: " + result.error);
                } else if (result.isCancelled) {
                  alert("Login was cancelled");
                } else {
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
  }
}

mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(() => { return {} }, mapDispatchToProps)(SignIn);
