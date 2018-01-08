import React from 'react';
import ReactNative from 'react-native';
const {
  View,
  Image,
  StyleSheet,
} = ReactNative

const LaunchScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/loginScreen.jpg')} style={styles.backgroundImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default LaunchScreen;
