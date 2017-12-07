import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import appReducer from '../reducers';

const configureStore = () => {
  const persistedState = {};

  const loggerMiddleware = createLogger(
    { predicate: (getState, action) => __DEV__ }
  );

  const storeEnhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );

  const store = createStore(
    appReducer,
    persistedState,
    storeEnhancer
  );

  return store;
};

export default configureStore;
