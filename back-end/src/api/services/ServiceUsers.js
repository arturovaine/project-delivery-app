const { createUser, findUser } = require('../models/userModel');
const CustomErrors = require('../errors/customErrors');
const md5 = require('md5');
const { jwtSign } = require('../jwt');

const create = async (name, email, password) => {
  const userExists = await findUser(email);
  if (!userExists) {
    const hashPassword = md5(password);
    const newUser = await createUser(name, email, hashPassword);
    return newUser;
  }
  throw new CustomErrors(409, 'User already exists');
}

const login = async (email, password) => {
  const userToLogin = await findUser(email);
  const { name, password } = userToLogin;

  if (userToLogin) {
    const md5Password = md5(password);
    if (md5Password === password) {
      const token = jwtSign({ name, email, role });
      return ({ name, email, role, token });
    };
  }
  throw new CustomErrors(404, 'User does not exist');
}

module.exports = { create, login };
