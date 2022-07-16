const express = require('express');
const { verifyToken } = require('../middlewares');

const router = express.Router();

const ControllerProduct = require('../controllers/ControllerProducts');

router.get('/', verifyToken, ControllerProduct.allProducts);

// router.get('/', ControllerProduct.getAllProducts);

module.exports = router;
