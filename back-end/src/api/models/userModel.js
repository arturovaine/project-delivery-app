const { User } = require('../../database/models');

const createUser = async (name, email, password, role = 'customer') => {
  try {
    const newUser = await User.create({ name, email, password, role });
    return newUser;
  } catch (err) {
    throw new Error('Error in user creation');
  }
};

const findUser = async (email) => {
  try {
    const userExists = await User.findOne({ where: { email } });
    return userExists;
  } catch (err) {
    throw new Error('Error to find registered user');
  }
};

const removeUser = async (email) => {
  try {
    const userExists = await User.destroy({ where: { email } });
    return userExists;
  } catch (err) {
    throw new Error('Error to find registered user');
  }
};

const findAllSellers = async () => {
  try {
    const seller = await User.findAll({
       where: { role: 'seller' }, attributes: { exclude: ['password'] } });
    return seller;
  } catch (error) {
    throw new Error('Something went wrong with seller list');
  }
};

module.exports = {
  createUser,
  removeUser,
  findUser,
  findAllSellers,
};
