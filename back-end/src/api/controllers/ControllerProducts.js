const { readAllProducts } = require('../services/ServiceProducts');
const CustomErrors = require('../errors/customErrors');

const allProducts = async (_req, res) => {
  try {
    const products = await readAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    if (error instanceof CustomErrors) {
      return res.status(error.statusCode).send({ error: error.message });
    }
    return res.status(500).end();
  }
};

module.exports = { allProducts };