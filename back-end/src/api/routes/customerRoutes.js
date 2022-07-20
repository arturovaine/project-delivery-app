const express = require('express');

const router = express.Router();

const ControllerSales = require('../controllers/ControllerSales');

// router.get('/orders');
router.get('/orders/:id', ControllerSales.findSaleAndProducts);

module.exports = router;
