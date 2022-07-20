const express = require('express');

const router = express.Router();

const ControllerSales = require('../controllers/ControllerSales');

router.post('/', ControllerSales.createSaleWithProducts);

// router.post('/', ControllerSales.addSale);

module.exports = router;
