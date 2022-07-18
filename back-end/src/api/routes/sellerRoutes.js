const express = require('express');

const router = express.Router();

const ControllerSeller = require('../controllers/ControllerSeller');
const { verifyToken } = require('../middlewares');

router.get('/list', verifyToken, ControllerSeller.findAllSellers);

module.exports = router;
