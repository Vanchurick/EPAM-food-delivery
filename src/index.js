import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheets/main.css';
import store from './redux/store';

console.log(process.env.NODE_ENV, process.env.REACT_APP_API_URL);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
