const express = require('express');

const router = express.Router();

const ControllerSales = require('../controllers/ControllerSales');
const { verifySalesCheckoutData } = require('../middlewares');

router.post('/checkout', verifySalesCheckoutData, ControllerSales.createSaleWithProducts);

module.exports = router;
