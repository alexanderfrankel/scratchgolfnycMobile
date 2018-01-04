import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';
import LaunchScreen from './screens/LaunchScreen';

const { persistor, store } = configureStore();

export default () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<LaunchScreen />}
        persistor={persistor}>
        <LaunchScreen />
      </PersistGate>
    </Provider>
  )
}

// import React, { Component } from 'react';
// import { Provider, connect } from 'react-redux';
// import { addNavigationHelpers } from 'react-navigation';
// import { AppNavigator } from './config/navigation';
// import store from './config/store';
//
// class AppNavigation extends Component {
//   render() {
//     const { nav, isLoggedIn, dispatch } = this.props;
//     const state = isLoggedIn
//       ? nav.stateForLoggedIn
//       : nav.stateForLoggedOut;
//     return (
//       <AppNavigator
//         navigation={ addNavigationHelpers({ dispatch, state }) }
//       />
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     isLoggedIn: state.isLoggedIn,
//     nav: state.nav,
//   };
// }
//
// const AppNavigationWithState = connect(mapStateToProps)(AppNavigation);
//
// const App = () => (
//   <Provider store={store}>
//     <AppNavigationWithState />
//   </Provider>
// );
//
// export default App;
