const express = require('express');
const homectrl = require('../controllers/homectrl');
const router = express.Router();


router.get('/', homectrl.root);
router.get('/health', homectrl.health);


module.exports = router;
