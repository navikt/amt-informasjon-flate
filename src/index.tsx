import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.less';
import store from './redux/Store';
import { Provider } from 'react-redux';
import mockServer from './mock/mirage-js';
require('dotenv').config();

if (process.env.ENABLE_LABS) {
  mockServer();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('arbeidstiltak-visning-root')
);
