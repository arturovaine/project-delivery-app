const express = require('express');
const router = express.Router();

const ControllerCustomer = (_req, res) => res.status(418).end();

router.get('/customer/products', ControllerCustomer);
router.get('/customer/checkout', ControllerCustomer);
router.get('/customer/orders/:id', ControllerCustomer);

// router.get('/customer/products', ControllerCustomer.getProducts);
// router.get('/customer/checkout', ControllerCustomer.getCheckout);
// router.get('/customer/orders/:id', ControllerCustomer.getOrderById);

module.exports = router;
