import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const {
  View,
  Text,
  TouchableHighlight,
} = ReactNative

class AppContainer extends Component {
  render() {
    return (
      <View>
        <Text style={{marginTop: 20}}>
          I am app container! Game Count: {this.props.gameCount}
        </Text>
        <TouchableHighlight onPress={() => {this.props.addGame()}}>
          <Text>Add Game</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameCount: state.gameCount
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
