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

const readOne = async (id) => {
  try {
    const sale = await Sale.findByPk(id);
    return sale;
  } catch (error) {
    throw new CustomErrors(500, error.message);
  }
};

const readAllByUserId = async (userId) => {
  try {
    const allUserSales = await Sale.findAll({ where: { userId } });
    return allUserSales;
  } catch (error) {
    throw new CustomErrors(500, error.message);
  }
};

const readAllBySellerId = async (sellerId) => {
  try {
    const allSellerSales = await Sale.findAll({ where: { sellerId } });
    return allSellerSales;
  } catch (error) {
    throw new CustomErrors(500, error.message);
  }
};

const updateSaleStatus = async (saleId, status) => {
  try {
    const updateSale = await Sale.update({ status }, { where: { id: saleId } });
    return updateSale;
  } catch (error) {
    throw new CustomErrors(500, error.message);
  }
};

const deleteOneSale = async (id) => {
  try {
    const deletedSale = await Sale.destroy({ where: { id } });
    return deletedSale;
  } catch (error) {
    throw new CustomErrors(500, error.message);
  }
};

module.exports = {
  create, 
  readOne, 
  readAllByUserId, 
  updateSaleStatus, 
  deleteOneSale,
  readAllBySellerId,
 };