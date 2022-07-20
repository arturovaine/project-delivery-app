const salesService = require('../services/ServiceSales');
const CustomErrors = require('../errors/customErrors');

const createSaleWithProducts = async (req, res) => {
  try {
   await salesService.createSaleWithProducts({ ...req.body });
   return res.status(201).json();
  } catch (error) {
    if (error instanceof CustomErrors) {
      return res.status(error.statusCode).send({ error: error.message });
    }
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createSaleWithProducts,
};