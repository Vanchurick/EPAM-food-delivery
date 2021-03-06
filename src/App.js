import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';
import OrderPage from './pages/OrderPage/OrderPage';
import LunchesPage from './pages/LunchesPage/LunchesPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="main">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/menu" component={MenuPage} />
            <Route path="/order" component={OrderPage} />
            <Route path="/lunches" component={LunchesPage} />
            <Redirect push to="/" />
          </Switch>
          <Footer />
        </div>
        <ToastContainer />
      </div>
    );
  }
}
export default App;
