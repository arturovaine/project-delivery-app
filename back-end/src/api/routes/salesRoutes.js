const express = require('express');

const router = express.Router();

const ControllerSales = require('../controllers/ControllerSales');

router.post('/checkout', ControllerSales.createSaleWithProducts);

module.exports = router;
