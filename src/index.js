import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './ui/app/cnt-app';
import configureStore from './store/configure-store';
import * as serviceWorker from './serviceWorker';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
