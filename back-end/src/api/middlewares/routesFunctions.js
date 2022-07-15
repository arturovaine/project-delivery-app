const CustomError = require('../errors/customErrors');

// https://www.emailregex.com/
const emailRegex = {
  p1: '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)',
  p2: '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
  p3: '[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
};

// https://stackoverflow.com/questions/275160/regex-for-names#2044909
const nameRegex = /^([ \u00c0-\u01ffa-zA-Z'\\-])+$/;
  
const isEmailValid = (email = '') => {
  const validateEmailRegex = Object.values(emailRegex).reduce((prev, next) => prev + next);
  const regex = new RegExp(validateEmailRegex);

  if (email.length < 1) throw new CustomError(400, 'email must be informed');
  if (!regex.test(email)) throw new CustomError(400, 'email invalid');

  return true;
};

const isPasswordValid = (password = '') => {
  if (password.length < 1) throw new CustomError(400, 'password must be informed');
  if (password.length < 6) { 
    throw new CustomError(400, 'password must have at least 6 characters');
  }
  return true;
};

const isNameValid = (name = '') => {
  const regex = new RegExp(nameRegex);

  if (name.length < 1) throw new CustomError(400, 'name must be informed');
  if (name.length < 12) {
    throw new CustomError(400, 'name must have at least 12 characters');
  }
  if (!regex.test(name)) throw new CustomError(400, 'invalid name');

  return true;
};

const validLoginKeys = (req) => {
  const keys = ['email', 'password'];
  const loginKeys = Object.keys(req.body);
  const isValid = loginKeys.every((e, i) => e === keys[i]);
  if (!isValid) throw new CustomError(400, 'information invalid');
};

const validRegisterKeys = (req) => {
  const keys = ['name', 'email', 'password'];
  const registerKeys = Object.keys(req.body);
  const isValid = registerKeys.every((e, i) => e === keys[i]);
  if (!isValid) throw new CustomError(400, 'information invalid');
};

module.exports = { 
  isEmailValid, 
  isPasswordValid, 
  isNameValid,
  validLoginKeys,
  validRegisterKeys,
 };