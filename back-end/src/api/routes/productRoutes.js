const express = require('express');
const router = express.Router();
const app = require('app');

const ControllerProduct = (_req, res) => res.status(418).end();

app.get('/', ControllerProduct);

// app.get('/', ControllerProduct.getAllProducts);
