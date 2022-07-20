const salesModel = require('../models/salesModel');
const salesProductsModel = require('../models/salesProductsModel');
const userModel = require('../models/userModel');
const CustomErrors = require('../errors/customErrors');

// needs a valid email, otherwise destructuring won't work
const createSaleWithProducts = async (saleData) => {
  try {
    const { customerEmail, sellerId, totalPrice, deliveryAddress, 
      deliveryNumber, products } = saleData;
    const { id: userId } = await userModel.findUser(customerEmail);
    const { id: saleId } = await salesModel.create({ 
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });
    await Promise.all(products.map((e) => {
      const { id, quantity } = e;
      return salesProductsModel.create(saleId, id, quantity);
    }));
    return { saleId };
  } catch (error) {
    if (error instanceof CustomErrors) {
      throw new CustomErrors(error.statusCode, error.message);
    }
    throw new CustomErrors(500, error.message);
  }
};

// this one goes to customer/orders/:id
const findSaleAndProducts = async (id) => {
  try {
    const saleAndProducts = await salesModel.readOne(id);
    return saleAndProducts;
  } catch (error) {
    if (error instanceof CustomErrors) {
      throw new CustomErrors(error.statusCode, error.message);
    }
    throw new CustomErrors(500, 'Service unavailable');
  }
};

module.exports = {
  createSaleWithProducts,
  findSaleAndProducts,
};
