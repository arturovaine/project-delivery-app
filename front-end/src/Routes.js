import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
// import Register from './pages/Register';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/login" component={ Login } />
            {/* <Route exact path="/register" component={ Register } /> */}
          </Switch>
        </main>
      </div>
    );
  }
}
