const express = require('express');

const controller= require('../controllers/product_controller');

const router = express.Router();

router.get('/', controller.getProduct);

module.exports = router;
