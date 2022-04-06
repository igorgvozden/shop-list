const express = require('express');
const shopsController = require('../controllers/shopsController');
const errorHandler = require('../controllers/errorController');
const validator = require('../utils/validateReq');

const router = express.Router();

// router.route('/')
//     .get(shopsController.getShops)
//     .post(shopsController.addShop)

//////////////////// CHANGED ROUTER //////////////////////////

router.get('/', async(req, res, next) => {
    try {
        const response = await shopsController.getShops();

        response.status === 'Success' ? res.status(200).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    }
});

router.post('/', [...validator.validateShop], async(req, res, next) => {
    try {
        const response = await shopsController.addShop(req.body);

        response.status === 'Success' ? res.status(201).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        next(errorHandler(error, req, res, next))
    };
});

//////////////////////////////////////////////////////////////

module.exports = router;