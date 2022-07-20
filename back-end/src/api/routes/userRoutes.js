const express = require('express');
const ControllerUsers = require('../controllers/ControllerUsers');

const router = express.Router();

router.get('/', ControllerUsers.getAllUsers);

module.exports = router;
