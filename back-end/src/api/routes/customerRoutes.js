const express = require('express');
const router = express.Router();
const app = require('app');

const ControllerCustomer = (_req, res) => res.status(418).end();

app.get('/customer/products', ControllerCustomer);
app.get('/customer/checkout', ControllerCustomer);
app.get('/customer/orders/:id', ControllerCustomer);

// app.get('/customer/products', ControllerCustomer.getProducts);
// app.get('/customer/checkout', ControllerCustomer.getCheckout);
// app.get('/customer/orders/:id', ControllerCustomer.getOrderById);
