const express = require('express');

const router = express.Router();
const ControllerUsers = require('../controllers/ControllerUsers');

router.get('/register', ControllerUsers.createUser);

module.exports = router;
