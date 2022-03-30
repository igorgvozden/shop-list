const express = require('express');
const shopsController = require('../controllers/shopsController');

const router = express.Router();

router.route('/')
    .get(shopsController.getShops)
    .post(shopsController.addShop)

module.exports = router;