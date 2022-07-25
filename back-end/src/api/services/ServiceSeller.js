const { findAllSellers, findUser } = require('../models/userModel');
const { readAllBySellerId } = require('../models/salesModel');
const CustomErrors = require('../errors/customErrors');

const findAllSellersService = async () => {
  try {
    const allSellers = await findAllSellers();
    return allSellers;
  } catch (error) {
    throw new CustomErrors(500, error.message);
  }
};

const findAllRelatedOrders = async (email) => {
  try {
    const seller = await findUser(email);
    const sales = await readAllBySellerId(seller.id);
    return sales;
  } catch (error) {
    throw new CustomErrors(500, error.message);
  }
};

module.exports = { 
  findAllSellersService,
  findAllRelatedOrders,
};