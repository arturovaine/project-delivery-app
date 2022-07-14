const jwt = require('jsonwebtoken');
const jwtConfig = require('./jwtConfig');
const fs = require('fs');

const SECRET_KEY = fs.readFileSync('../../../jwt.evaluation.key');

const jwtSign = (payload = {}) => {
  const token = jwt.sign(payload, SECRET_KEY, jwtConfig);
  return token;
}
const jwtVerify = (token, SECRET_KEY) => {
  const isValidToken = jwt.verify(token, SECRET_KEY);
  return isValidToken;
}

module.exports = { jwtSign, jwtVerify };
