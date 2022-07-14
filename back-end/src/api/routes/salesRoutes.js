const express = require('express');

const router = express.Router();

const ControllerSales = (_req, res) => res.status(418).end();

router.post('/', ControllerSales);

// router.post('/', ControllerSales.addSale);

module.exports = router;
