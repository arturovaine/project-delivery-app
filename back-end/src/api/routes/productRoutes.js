const express = require('express');

const router = express.Router();

const ControllerProduct = (_req, res) => res.status(418).end();

router.get('/', ControllerProduct);

// router.get('/', ControllerProduct.getAllProducts);

module.exports = router;
