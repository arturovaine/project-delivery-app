const express = require('express');
const router = express.Router();
const app = require('app');

const ControllerLogin = (_req, res) => res.status(418).end()

app.get('/', ControllerLogin);
// app.get('/login', ControllerLogin);

// app.get('/', ControllerLogin.login);
// app.get('/login', ControllerLogin.login);
// app.get('/register', ControllerLogin.register);
