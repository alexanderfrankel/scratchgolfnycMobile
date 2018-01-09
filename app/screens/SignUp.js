import React, { Component  } from "react";
import { connect  } from "react-redux";
import ReactNative from 'react-native';
const {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  StyleSheet,
} = ReactNative

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
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
});

export default connect(() => { return {} }, mapDispatchToProps)(SignUp);
