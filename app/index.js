import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { store, persistor } from './store';
import * as session from './services/session';
import Launch from './screens/Launch';
import Main from './screens/Main'

const onBeforeLift = () => {
  // session.refreshToken();
};

export default () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Launch />}
        onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}
