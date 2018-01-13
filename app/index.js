import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { store, persistor } from './store';
import * as session from './services/session';
import Launch from './screens/Launch';
import App from './screens/App'

const onBeforeLift = () => {
  // session.refreshToken();
};

export default () => {
  persistor.purge();
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Launch />}
        onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}
