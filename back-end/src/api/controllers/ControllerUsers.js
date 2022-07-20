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

const getAllUsers = async (_req, res) => {
  try {
    const allUsers = await ServiceUsers.getAllUsers();
    let tabulatedUsers = [];
    allUsers.map((user)=>{
      const { id, name, email, role } = user;
      tabulatedUsers.push({ id, name, email, role });
    });
    console.log('tabulated:', tabulatedUsers);
    // console.log(allUsers[0].dataValues);
    // console.log(allUsers[1].dataValues);
    return res.status(200).json(tabulatedUsers);
  } catch (err) {
    if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ error: err.message });
      return;
    }
    return res.status(500).send({ error: err.message });
    return;
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

const adminDeleteUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await ServiceUsers.remove(name, email, password);
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
  getAllUsers,
  adminCreateUser,
  adminDeleteUser,
  login,
};
