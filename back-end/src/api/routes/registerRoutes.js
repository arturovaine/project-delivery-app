const express = require('express');
const router = express.Router();

const ControllerRegister = (_req, res) => res.status(418).end()

router.get('/register', ControllerRegister);

// router.get('/register', ControllerRegister.register);

module.exports = router;
