const express = require('express');
const listControler = require('../controllers/listsController');

const router = express.Router();

router.route('/')
    .get(listControler.getShoppingLists);

module.exports = router;