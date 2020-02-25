import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import RootReducer from './RootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();

// const INITIAL_STATE = {};

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
