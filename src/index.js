import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheets/main.css';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <Route component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
