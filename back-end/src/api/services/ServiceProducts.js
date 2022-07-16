const { readAll } = require('../models/productsModel');
// const CustomErrors = require('../errors/customErrors');

const readAllProducts = async () => {
    const products = await readAll();
    return products;
};

const readOneProduct = async () => {};

module.exports = { readAllProducts, readOneProduct };