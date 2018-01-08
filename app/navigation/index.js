import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import AppNavigator from './AppNavigator';

class AppNavigation extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.obBackPress);
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
    const { nav, isLoggedIn, dispatch } = this.props;
    const state = isLoggedIn
      ? nav.stateForLoggedIn
      : nav.stateForLoggedOut;
    return (
      <AppNavigator
        navigation={ addNavigationHelpers({ dispatch, state }) }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    nav: state.nav,
  };
}

export default connect(mapStateToProps)(AppNavigation);
