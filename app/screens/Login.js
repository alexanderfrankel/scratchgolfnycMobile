import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { LoginButton } from 'react-native-fbsdk';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
} = ReactNative


class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/loginScreen.jpg')} style={styles.backgroundImage} />
        </View>
        <View style={styles.loginContainer}>
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
            onLogoutFinished={() => alert("User logged out")}/>
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
  imageContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 25,
  },
})

export default connect(() => { return {} }, mapDispatchToProps)(Login);

