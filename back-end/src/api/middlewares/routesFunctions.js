const CustomError = require('../errors/customErrors');

// https://www.emailregex.com/
const emailRegex = {
  p1: '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)',
  p2: '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
  p3: '[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
};

// https://andrewwoods.net/blog/2018/name-validation-regex/
const nameRegex = {
  p1: '/^[A-Za-z\\x{00C0}-\\x{00FF}][A-Za-z\\x{00C0}-\\x{00FF}\'\\-]+',
  p2: '([\\ A-Za-z\\x{00C0}-\\x{00FF}][A-Za-z\\x{00C0}-\\x{00FF}\'\\-]+)*/u',
};
  
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
  const validNameRegex = Object.values(nameRegex).reduce((prev, next) => prev + next);
  const regex = new RegExp(validNameRegex);

  if (name.length < 1) throw new CustomError(400, 'name must be informed');
  if (name.length < 12) {
    throw new CustomError(400, 'name must have at least 12 characters');
  }
  if (!regex.test(name)) throw new CustomError(400, 'invalid name');

  return true;
};

module.exports = { isEmailValid, isPasswordValid, isNameValid };