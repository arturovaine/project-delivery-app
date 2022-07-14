const express = require('express');
const router = express.Router();

const ControllerSeller = (_req, res) => res.status(418).end();

router.get('/', ControllerSeller);

// router.get('/', ControllerSeller.getAllSellers);

module.exports = router;
