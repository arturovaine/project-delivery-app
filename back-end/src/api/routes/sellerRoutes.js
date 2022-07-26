const express = require('express');

const router = express.Router();

const ControllerSeller = require('../controllers/ControllerSeller');
const { verifyToken } = require('../middlewares');

router.get('/list', verifyToken, ControllerSeller.findAllSellers);
router.get('/orders', verifyToken, ControllerSeller.findAllOrders);
router.get('/orders/:id', verifyToken, ControllerSeller.sellerOrder);
router.patch('/update/:id', verifyToken, ControllerSeller.updateSaleStatus);

module.exports = router;
