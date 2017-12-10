import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppContainer from './containers/AppContainer';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
