import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger({
  predicate: (getState, action) => __DEV__,
});

export default applyMiddleware(
  thunkMiddleware,
  logger,
);
