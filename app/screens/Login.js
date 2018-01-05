import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
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
          <TouchableHighlight onPress={ () => { this.props.login() } }>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>
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
    justifyContent: 'center',
  },

  loginText: {
    fontSize: 60,
    color: 'white',
  },
})

export default connect(() => { return {} }, mapDispatchToProps)(Login);

