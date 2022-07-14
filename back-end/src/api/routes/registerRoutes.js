const express = require('express');
const router = express.Router();
const app = require('app');

const ControllerRegister = (_req, res) => res.status(418).end()

app.get('/register', ControllerRegister);

// app.get('/register', ControllerRegister.register);
