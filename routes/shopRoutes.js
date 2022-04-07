const express = require('express');
const shopsController = require('../controllers/shopsController');
const validator = require('../utils/validateReq');

const router = express.Router();

// router.route('/')
//     .get(shopsController.getShops)
//     .post(shopsController.addShop)

//////////////////// CHANGED ROUTER //////////////////////////

router.get('/', async(req, res, next) => {
    try {
        const response = await shopsController.getShops();

        res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
});

router.post('/', [...validator.validateShop], async(req, res, next) => {
    try {
        const response = await shopsController.addShop(req.body);

        res.status(201).json({ response });
    } catch (error) {
        next(error);
    };
});

//////////////////////////////////////////////////////////////

module.exports = router;