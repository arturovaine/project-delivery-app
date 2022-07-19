const ServiceUsers = require('../services/ServiceUsers');
const CustomError = require('../errors/customErrors');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await ServiceUsers.create(name, email, password);
    return res.status(201).json(user);
  } catch (err) {
    if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ error: err.message });
    }
    return res.status(500).send({ error: err.message });
  }
};

const adminCreateUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await ServiceUsers.create(name, email, password, role);
    return res.status(201).json(user);
  } catch (err) {
    if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ error: err.message });
    }
    return res.status(500).send({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userToLogin = await ServiceUsers.login(email, password);
    return res.status(200).json(userToLogin);
  } catch (err) {
    if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ error: err.message });
    }
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  createUser,
  adminCreateUser,
  login,
};
