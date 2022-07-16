const { Product } = require('../../database/models');

const create = () => {};

const readAll = async () => {
  const products = await Product.findAll();
  return products;
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
