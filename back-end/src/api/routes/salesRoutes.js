const express = require('express');
const router = express.Router();
const app = require('app');

const ControllerSales = (_req, res) => res.status(418).end();

app.post('/', ControllerSales);

// app.post('/', ControllerSales.addSale);
