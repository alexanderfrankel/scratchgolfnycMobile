import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { AppNavigator } from './config/router';
import store from './config/store';

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

const AppNavigationWithState = connect(mapStateToProps)(AppNavigation);

const App = () => (
  <Provider store={store}>
    <AppNavigationWithState />
  </Provider>
);

export default App;
