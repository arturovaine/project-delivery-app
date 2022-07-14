const express = require('express');
const router = express.Router();
const ControllerUsers = require('../controllers/ControllerUsers');

router.get('/', ControllerUsers.login);

module.exports = router;
