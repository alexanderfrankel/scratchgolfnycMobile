import React from 'react';
import ReactNative from 'react-native';
const {
  View,
  Image,
} = ReactNative

import styles from './styles';

const LaunchScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./images/launchScreen.jpg')} style={styles.backgroundImage} />
    </View>
  );
}

export default LaunchScreen;
