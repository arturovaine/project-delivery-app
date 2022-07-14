const { createUser, findUser } = require('../models/userModel');
const CustomErrors = require('../errors/customErrors');
const md5 = require('md5');

const create = async (name, email, password) => {
  const userExists = await findUser(email);
  if (!userExists) {
    const hashPassword = md5(password);
    const newUser = await createUser(name, email, hashPassword);
    return newUser;
  }
  throw new CustomErrors(409, 'User already exists');
}

const login = async (email) => {
  const userToLogin = await findUser(email);
}

module.exports = { create, login };
