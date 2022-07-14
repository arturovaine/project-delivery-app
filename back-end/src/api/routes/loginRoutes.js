const express = require('express');

const router = express.Router();
const ControllerUsers = require('../controllers/ControllerUsers');

router.post('/', ControllerUsers.login);

module.exports = router;
