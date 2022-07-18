const { findAllSellers } = require('../models/userModel');
const CustomErrors = require('../errors/customErrors');

const findAllSellersService = async () => {
  try {
    const allSellers = await findAllSellers();
    return allSellers;
  } catch (error) {
    throw new CustomErrors(500, error.message);
  }
};

module.exports = { findAllSellersService };