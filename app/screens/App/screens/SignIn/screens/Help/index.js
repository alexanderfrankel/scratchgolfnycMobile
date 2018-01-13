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

class Help extends Component {
  static navigationOptions = {
    title: "Help",
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder={'Email'} style={styles.input}/>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect(() => { return {} })(Help);
