import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers';

const config = {
  key: 'root',
  storage,
};

const logger = createLogger({
  predicate: (getState, action) => __DEV__,
});

const enhancer = compose(
  applyMiddleware(
    thunk,
    logger,
  ),
);

export const store = createStore(
  persistReducer(config, reducer),
  enhancer,
);

export const persistor = persistStore(store);
