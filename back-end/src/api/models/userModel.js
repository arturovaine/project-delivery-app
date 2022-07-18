const { User } = require('../../database/models');

const createUser = async (name, email, password) => {
  try {
    const newUser = await User.create({ name, email, password, role: 'customer' });
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

const findAllSellers = async () => {
  try {
    const seller = await User.findAll({
       where: { role: 'seller' }, attributes: { exclude: ['password'] } });
    return seller;
  } catch (error) {
    throw new Error('Something went wrong with seller list');
  }
};

module.exports = { createUser, findUser, findAllSellers };
