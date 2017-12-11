import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import store from './config/store';
import Navigator from './config/router';

class AppContainer extends Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
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

const AppWithNavigationState = connect(mapStateToProps)(AppContainer);

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
