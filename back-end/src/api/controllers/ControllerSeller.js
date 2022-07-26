const CustomErrors = require('../errors/customErrors');
const {
  findAllSellersService,
  findAllRelatedOrders,
  sellerOrderDetails,
  updateStatus,
} = require('../services/ServiceSeller');

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
  }
};

const sellerOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const orderData = await sellerOrderDetails(id);
    return res.status(200).json(orderData);
  } catch (error) {
    if (error instanceof CustomErrors) {
      return res.status(error.statusCode).send({ error: error.message });
    }
  }
};

const updateSaleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await updateStatus(id, status);
    return res.status(200).json(id);
  } catch (error) {
    if (error instanceof CustomErrors) {
      return res.status(error.statusCode).send({ error: error.message });
    }
  }
};

module.exports = {
  findAllSellers,
  findAllOrders,
  sellerOrder,
  updateSaleStatus,
};
