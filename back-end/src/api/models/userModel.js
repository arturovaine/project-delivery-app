const { User } = require('../../database/models');

const createUser = async (name, email, password) => {
  try {
    const newUser = await User.create({ name, email, password, role: 'customer' });
    return newUser;
  } catch (err) {
    throw new Error('Erro na model de criação de usuário.');
  }
}

const findUser = async (email) => {
  try {
    const userExists = await User.findOne({ email });
    return userExists;
  } catch (err) {
    throw new Error('Erro para encontrar usuário cadastrado.');
  }
  
}

module.exports = {createUser, findUser};
