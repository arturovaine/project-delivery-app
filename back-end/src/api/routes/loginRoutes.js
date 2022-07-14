const express = require('express');
const ControllerUsers = require('../controllers/ControllerUsers');

const router = express.Router();

router.post('/', ControllerUsers.login);

module.exports = router;
