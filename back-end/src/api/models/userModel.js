const { User } = require('../../database/models');

const createUser = async (name, email, password) => {
  try {
    const newUser = await User.create({ name, email, password, role: 'customer' });
    return newUser;
  } catch (err) {
    throw new Error('Erro na model de criação de usuário.');
  }
};

const findUser = async (email) => {
  try {
    const userExists = await User.findOne({ where: { email } });
    return userExists;
  } catch (err) {
    throw new Error('Erro para encontrar usuário cadastrado.');
  }
};

const findAllSellers = async () => {
  try {
    const seller = await User.findAll({ where: { role: 'seller' } });
    return seller;
  } catch (error) {
    throw new Error('Something went wrong with seller list');
  }
};

module.exports = { createUser, findUser, findAllSellers };
