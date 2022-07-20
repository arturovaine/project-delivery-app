const CustomErrors = require('../errors/customErrors');

// i'll use the isValidEmail function
// const checkCustomerEmail = (customerEmail = '') => {};

const checkSellerId = (sellerId) => {
  if (!sellerId) throw new CustomErrors(400, 'sellerId must be informed');
  if (typeof sellerId !== 'number') throw new CustomErrors(400, 'sellerId must be a number');
  return true;
};

const checkTotalPrice = (totalPrice) => {
  if (!totalPrice) throw new CustomErrors(400, 'totalPrice must be informed');
  if (typeof totalPrice !== 'number') throw new CustomErrors(400, 'totalPrice must be a number');
  return true;
};

const checkDeliveryAddress = (deliveryAddress = '') => {
  if (typeof deliveryAddress !== 'string') {
    throw new CustomErrors(400, 'deliveryAddress must be a string');
  }
  if (deliveryAddress.length < 1) throw new CustomErrors(400, 'deliveryAddress must be informed');
  return true;
};

const checkDeliveryNumber = (deliveryNumber = '') => {
  if (deliveryNumber.length < 1) throw new CustomErrors(400, 'deliveryNumber must be informed');
  if (typeof deliveryNumber !== 'string') {
    throw new CustomErrors(400, 'deliveryNumber must be a string with numbers');
  }
  return true;
};

const checkProductsKeys = (products = []) => {
  if (products.length < 1) throw new CustomErrors(400, 'products cannot be empty');
  products.forEach((product) => {
    const isKeysValid = Object.keys(product);
    if (!(isKeysValid[0] === 'id' && isKeysValid[1] === 'quantity')) {
      throw new CustomErrors(400, 'A product has an invalid key');
    }
  });
  return true;
};

const checkProductsData = (products = []) => {
  if (products.length < 1) throw new CustomErrors(400, 'products cannot be empty');
  products.forEach((product) => {
    const isDataValid = Object.values(product);
    if (!(typeof isDataValid[0] === 'number' && typeof isDataValid[1] === 'number')) {
      throw new CustomErrors(400, 'A product id and quantity must be a number');
    }
  });
  return true;
};

module.exports = {
  checkSellerId,
  checkTotalPrice,
  checkDeliveryAddress,
  checkDeliveryNumber,
  checkProductsKeys,
  checkProductsData,
};