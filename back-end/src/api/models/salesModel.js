const { Sale } = require('../../database/models');
const CustomErrors = require('../errors/customErrors');

const create = async (saleData) => {
  try {
    const { 
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, 
    } = saleData;
    const sale = await Sale.create({
      userId,
      sellerId, 
      totalPrice, 
      deliveryAddress, 
      deliveryNumber,
      saleDate: new Date(),
      status: 'Pendente',
    });
    return sale;
  } catch (error) {
    throw new CustomErrors(500, error.message);
  }
};

// create({ userId: 7, sellerId: 2, totalPrice: 200.50, deliveryAddress: 'a', deliveryNumber: '30' });

const readOne = async () => {};

const readAllByUserId = async (userId) => {
  try {
    const allUserSales = await Sale.findAll({ where: { userId } });
    return allUserSales;
  } catch (error) {
    throw new CustomErrors(500, error.message);
  }
};

const updateOne = async () => {};

const deleteSale = async () => {};

module.exports = { create, readOne, readAllByUserId, updateOne, deleteSale };