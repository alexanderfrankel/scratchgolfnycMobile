import React, { Component  } from "react";
import { connect  } from "react-redux";
import ReactNative from 'react-native';
const {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
} = ReactNative

import styles from './styles';

class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder={'Email'} style={styles.input}/>
        <TextInput placeholder={'Password'} style={styles.input}/>
        <TextInput placeholder={'Confirm password'} style={styles.input}/>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect(() => { return {} }, mapDispatchToProps)(SignUp);
