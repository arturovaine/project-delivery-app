const express = require('express');

const router = express.Router();

const ControllerSales = require('../controllers/ControllerSales');
const { verifyToken } = require('../middlewares');

router.get('/orders', verifyToken, ControllerSales.findAllCustomerSales);
router.get('/orders/:id', verifyToken, ControllerSales.findSaleAndProducts);

module.exports = router;
