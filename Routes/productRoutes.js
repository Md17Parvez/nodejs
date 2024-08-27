const express = require('express');
const productctrl = require('./../controllers/productctrl');

const router = express.Router();

router.get('/products', productctrl.getAll);
router.get('/products/:id', productctrl.getById);

module.exports = router;
