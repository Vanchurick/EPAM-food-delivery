import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Menu from './pages/Menu/Menu';
import Header from './components/Header/Header';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/menu" component={Menu} />
          <Redirect push to="/" />
        </Switch>
      </div>
    );
  }
}
export default App;
