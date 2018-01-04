import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './AppNavigator';

class AppNavigation extends Component {
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
