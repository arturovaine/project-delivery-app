const jwt = require('jsonwebtoken');
const fs = require('fs');
const jwtConfig = require('./jwtConfig');

const SECRET_KEY = fs.readFileSync('jwt.evaluation.key', 'utf8');

const jwtSign = (payload = {}) => {
  const token = jwt.sign(payload, SECRET_KEY, jwtConfig);
  return token;
};
const jwtVerify = (token) => {
  const isValidToken = jwt.verify(token, SECRET_KEY);
  return isValidToken;
};

module.exports = { jwtSign, jwtVerify };
