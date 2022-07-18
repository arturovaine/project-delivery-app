const { SalesProducts } = require('../../database/models');
const CustomErrors = require('../errors/customErrors');

const create = async (saleId, productId, quantity) => {
  try {
    const data = await SalesProducts.create({ saleId, productId, quantity });
    return data;
  } catch (error) {
    throw new CustomErrors(500, error.message);
  }
};

const readOne = async () => {};

const updateOne = async () => {};

const deleteSale = async () => {};

module.exports = { 
  create, 
  readOne, 
  updateOne, 
  deleteSale,
 };