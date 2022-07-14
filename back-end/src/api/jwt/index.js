const jwt = require('jsonwebtoken');
const jwtConfig = require('./jwtConfig');
const fs = require('fs');

const SECRET_KEY = fs.readFileSync();

const jwtSign = (payload = {}) => {}
const jwtVerify = (token = '', SECRET_KEY) => {}
