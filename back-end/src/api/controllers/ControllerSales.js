const salesService = require('../services/ServiceSales');
const CustomErrors = require('../errors/customErrors');

// /sales/checkout
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

// customer/orders/:id
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

// customer/orders/
const findAllCustomerSales = async (req, res) => {
  try {
    const { email } = req.body;
    const salesData = await salesService.findAllCustomerSales(email);
    return res.status(200).json(salesData);
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
  findAllCustomerSales,
};