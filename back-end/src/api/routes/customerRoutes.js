const express = require('express');

const router = express.Router();

const ControllerSales = require('../controllers/ControllerSales');
const { verifyToken, verifyOnlyEmail } = require('../middlewares');

router.get('/orders', verifyToken, verifyOnlyEmail, ControllerSales.findAllCustomerSales);
router.get('/orders/:id', verifyToken, ControllerSales.findSaleAndProducts);

module.exports = router;
