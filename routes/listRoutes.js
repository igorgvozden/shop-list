const express = require('express');
const listControler = require('../controllers/listsController');

const router = express.Router();

router.route('/')
    .get(listControler.getShoppingLists)
    .post(listControler.addList)

router.route('/shopping-list')
    .get(listControler.getList);

module.exports = router;