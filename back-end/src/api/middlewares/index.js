const CustomErrors = require('../errors/customErrors');
const { jwtVerify } = require('../jwt');

const { 
  isEmailValid, 
  isNameValid, 
  isPasswordValid,
  validLoginKeys,
  validRegisterKeys,
 } = require('./routesFunctions');

 const {
  checkSellerId,
  checkTotalPrice,
  checkDeliveryAddress,
  checkDeliveryNumber,
  checkProductsKeys,
  checkProductsData,
 } = require('./salesRouteFunctions');

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

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ error: 'Unauthorized' });
    const checkAuth = jwtVerify(authorization);
    if (checkAuth) return next();
  } catch (err) {
    return res.status(401).send({ error: err.message });
  }
};

const verifySalesCheckoutData = (req, res, next) => {
  try {
    const { 
      customerEmail, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = req.body;
    const validations = [isEmailValid(customerEmail), checkSellerId(sellerId),
      checkTotalPrice(totalPrice),
      checkDeliveryAddress(deliveryAddress),
      checkDeliveryNumber(deliveryNumber),
      checkProductsKeys(products),
      checkProductsData(products),
    ];
    const isValid = validations.every((e) => e === true);
    return isValid ? next() : '';
  } catch (error) {
    if (error instanceof CustomErrors) {
      return res.status(error.statusCode).send({ error: error.message });
    }
    return res.status(500).end();
  }
};

module.exports = { verifyLogin, verifyRegister, verifyToken, verifySalesCheckoutData };