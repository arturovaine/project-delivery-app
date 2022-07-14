const express = require('express');
const router = express.Router();
const app = require('app');

const ControllerSeller = (_req, res) => res.status(418).end();

app.get('/', ControllerSeller);

// app.get('/', ControllerSeller.getAllSellers);
