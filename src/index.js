import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// REDUX
import { Provider } from 'react-redux';
import store from '../src/redux/Store';
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
document.getElementById('root'),
);