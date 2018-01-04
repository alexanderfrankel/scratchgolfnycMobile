import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';
import LaunchScreen from './screens/LaunchScreen';
import AppNavigation from './navigation'

const { persistor, store } = configureStore();

export default () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<LaunchScreen />}
        persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  )
}
