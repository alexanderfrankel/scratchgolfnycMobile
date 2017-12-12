import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { AppNavigator } from './config/router';
import store from './config/store';

class AppNavigation extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    )
  };
}

const mapStateToProps = (state) => {
  return {
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
