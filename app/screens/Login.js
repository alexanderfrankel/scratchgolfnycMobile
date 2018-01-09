import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import { ActionCreators } from '../actions';
import { LoginButton } from 'react-native-fbsdk';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  StyleSheet,
} = ReactNative


class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
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
          <Text onPress={ () => { this.props.signUp() } }>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    backgroundColor: '#073f12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 280,
    resizeMode: 'contain',
  },
  signInContainer: {
    flex: 9,
    backgroundColor: '#fcfdfc',
    padding: 30,
    alignItems: 'center',
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: '#f3f3f3',
    borderWidth: 2,
    borderColor: '#dcdcdc',
    fontSize: 16,
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#3b6043',
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fcfdfc',
  },
  extraDetails: {
    flexDirection: 'row',
    backgroundColor: '#fcfdfc',
    borderTopWidth: 2,
    borderColor: '#dcdcdc',
    height: 45,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default connect(() => { return {} }, mapDispatchToProps)(Login);

// logomakr.com/7dwAhH
// #073f12
