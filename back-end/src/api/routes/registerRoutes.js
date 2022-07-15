const express = require('express');
const ControllerUsers = require('../controllers/ControllerUsers');
const { verifyRegister } = require('../middlewares');

const router = express.Router();

router.post('/', verifyRegister, ControllerUsers.createUser);

module.exports = router;
