const express = require('express');
const productctrl = require('./../controllers/productctrl');

const router = express.Router();

router.get('/products',  productctrl.getAll);
router.get('/products/:id', productctrl.getById);
router.delete('/products/:id', productctrl.remove);
router.post('/products',  productctrl.create);
router.put('/products',  productctrl.update);

module.exports = router;
