const express = require('express');

const router = express.Router();

const ControllerOrder = (_req, res) => res.status(418).end();

router.get('/', ControllerOrder);

// router.get('/', ControllerOrder.getAllOrders);

module.exports = router;
