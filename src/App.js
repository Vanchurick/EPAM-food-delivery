import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';
import OrderPage from './pages/OrderPage/OrderPage';
import Header from './components/Header/Header';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/order" component={OrderPage} />
          <Redirect push to="/" />
        </Switch>
        <ToastContainer />
      </div>
    );
  }
}
export default App;
