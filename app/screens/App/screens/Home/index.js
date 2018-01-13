import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TouchableHighlight
} = ReactNative

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <TouchableHighlight onPress={ () => { this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'Profile' })) } }>
          <Text>Navigate to Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => { this.props.logout() } }>
          <Text>Logout</Text>
        </TouchableHighlight>
      </View>
    )
  };
};

mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(() => { return {} }, mapDispatchToProps)(Home);

