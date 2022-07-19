const express = require('express');
const ControllerUsers = require('../controllers/ControllerUsers');
const { verifyLogin } = require('../middlewares');

const router = express.Router();

router.post('/', verifyLogin, ControllerUsers.adminCreateUser);

module.exports = router;
