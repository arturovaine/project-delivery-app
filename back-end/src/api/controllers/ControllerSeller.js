const CustomErrors = require('../errors/customErrors');
const { findAllSellersService, findAllRelatedOrders } = require('../services/ServiceSeller');

const findAllSellers = async (_req, res) => {
  try {
    const allSellers = await findAllSellersService();
    return res.status(200).json(allSellers);
  } catch (error) {
    if (error instanceof CustomErrors) {
      return res.status(error.statusCode).send({ error: error.message });
    }
  }
};

const findAllOrders = async (req, res) => {
  try {
    const { email } = res.locals;
    const sales = await findAllRelatedOrders(email);
    return res.status(200).json(sales);
  } catch (error) {
    if (error instanceof CustomErrors) {
      return res.status(error.statusCode).send({ error: error.message });
    }
    return res.status(500).end();
  }
};

module.exports = { findAllSellers, findAllOrders };
