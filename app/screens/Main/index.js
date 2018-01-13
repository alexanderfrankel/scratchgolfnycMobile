import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';

import Login from './screens/Login';
import SignUp from './screens/Login/screens/SignUp';

const Start = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "SignUp",
    }
  },
})

export const NavigationStack =  StackNavigator({
  Start: {
    screen: Start,
  },
});

class Main extends Component {
  componentWillMount() {
    this.navigation.dispatch(NavigationActions.init());
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.obBackPress);
  }

  get navigation() {
    return addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    })
  }

  onbackPress() {
    const { dispatch, nav } = this.props;

    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    return (
      <NavigationStack navigation={this.navigation} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
  };
}

export default connect(mapStateToProps)(Main);
