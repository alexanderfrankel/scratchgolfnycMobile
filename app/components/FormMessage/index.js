import React from 'react';
import ReactNative from 'react-native';
const {
  Icon,
  Text,
  View,
} = ReactNative

import styles from './styles';

const FormMessage = (props) => {
  if (props.message) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          {props.message}
        </Text>
      </View>
    );
  }

};

export default FormMessage;
