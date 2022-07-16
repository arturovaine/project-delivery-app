const { Product } = require('../../database/models');
const CustomErrors = require('../errors/customErrors');

const create = () => {};

const readAll = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (err) {
    throw new CustomErrors(500, 'Products are unavailable');
  }
};

const readOne = () => {};

const update = () => {};

const deleteOne = () => {};

module.exports = {
  create,
  readAll,
  readOne,
  update,
  deleteOne,
};
