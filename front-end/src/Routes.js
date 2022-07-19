import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Admin from './pages/Admin';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import ProductsCustomer from './pages/Customer/Products';
import CheckoutCustomer from './pages/Customer/Checkout';
import OrdersCustomer from './pages/Customer/Orders';
import OrdersDetailsCustomer from './pages/Customer/OrdersDetails';

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
            <Route exact path="/admin/manage" component={ Admin } />
            <Route exact path="/customer/products" component={ ProductsCustomer } />
            <Route exact path="/customer/checkout" component={ CheckoutCustomer } />
            <Route exact path="/customer/orders" component={ OrdersCustomer } />
            <Route
              exact
              path="/customer/orders/:id"
              component={ OrdersDetailsCustomer }
            />
          </Switch>
        </main>
      </div>
    );
  }
}
