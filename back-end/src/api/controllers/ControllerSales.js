const salesService = require('../services/ServiceSales');
const CustomErrors = require('../errors/customErrors');

const createSaleWithProducts = async (req, res) => {
  try {
   const saleId = await salesService.createSaleWithProducts({ ...req.body });
   return res.status(201).json(saleId);
  } catch (error) {
    if (error instanceof CustomErrors) {
      return res.status(error.statusCode).send({ error: error.message });
    }
    return res.status(500).send({ error: error.message });
  }
};

const findSaleAndProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await salesService.findSaleAndProducts(id);
    return res.status(200).json(data);
   } catch (error) {
     if (error instanceof CustomErrors) {
       return res.status(error.statusCode).send({ error: error.message });
     }
     return res.status(500).send({ error: error.message });
   }
};

module.exports = {
  createSaleWithProducts,
  findSaleAndProducts,
};