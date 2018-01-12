import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { store, persistor } from './store';
import * as session from './services/session';
import LaunchScreen from './screens/LaunchScreen';
import AppNavigation from './navigation'

const onBeforeLift = () => {
  // session.refreshToken();
};

export default () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<LaunchScreen />}
        onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  )
}
