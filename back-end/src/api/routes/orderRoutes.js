const express = require('express');
const router = express.Router();
const app = require('app');

const ControllerOrder = (_req, res) => res.status(418).end();

app.get('/', ControllerOrder);

// app.get('/', ControllerOrder.getAllOrders);
