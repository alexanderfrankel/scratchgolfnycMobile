import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
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
        <TouchableHighlight onPress={ () => { this.props.login() } }>
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    )
  };
};

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => { return {} }, mapDispatchToProps)(Login);

