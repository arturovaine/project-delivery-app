const CustomErrors = require('../errors/customErrors');
const { 
  isEmailValid, 
  isNameValid, 
  isPasswordValid,
  validLoginKeys,
  validRegisterKeys,
 } = require('./routesFunctions');

const verifyLogin = (req, res, next) => {
  try {
    validLoginKeys(req);
    const { email, password } = req.body;
    const validations = [isEmailValid(email), isPasswordValid(password)];
    const [e, p] = validations;
    if (e && p) next();
  } catch (error) {
      if (error instanceof CustomErrors) {
        return res.status(error.statusCode).send({ error: error.message });
      }
      return res.status(500).end();
  }
};

const verifyRegister = (req, res, next) => {
  try {
    validRegisterKeys(req);
    const { name, email, password } = req.body;
    const validations = [
      isNameValid(name),
      isEmailValid(email),
      isPasswordValid(password),
    ];
    const isValid = validations.every((e) => e === true);
    return isValid ? next() : '';
  } catch (error) {
      if (error instanceof CustomErrors) {
        return res.status(error.statusCode).send({ error: error.message });
      }
      console.log(error);
      return res.status(500).end();
  }
};

module.exports = { verifyLogin, verifyRegister };