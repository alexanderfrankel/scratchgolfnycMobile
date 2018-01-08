import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
          <TextInput style={styles.input}/>
          <TextInput style={styles.input}/>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
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
          <Text>Don't have an account? Sign up.</Text>
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
  signInContainer: {
    flex: 9
  },
  logo: {
    width: 300,
    resizeMode: 'contain',
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: '#073f12',
    padding: 10,
    margin: 14,
    color: '#fff',
    fontSize: 20,
    borderRadius: 2,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 2,
    padding: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  extraDetails: {
    backgroundColor: '#6eb47c',
    height: 40,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default connect(() => { return {} }, mapDispatchToProps)(Login);

// logomakr.com/5vfOFE
// #073f12
