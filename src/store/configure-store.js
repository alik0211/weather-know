import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers';

export default function configureStore(initialState = {}) {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, apiMiddleware))
  );
}
