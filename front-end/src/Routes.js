import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
          </Switch>
        </main>
      </div>
    );
  }
}
