const express = require('express');

const router = express.Router();

const ControllerSales = require('../controllers/ControllerSales');
const { verifySalesCheckoutData, verifyToken } = require('../middlewares');

router.post('/checkout',
verifyToken, verifySalesCheckoutData, ControllerSales.createSaleWithProducts);

module.exports = router;
