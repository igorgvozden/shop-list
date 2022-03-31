const express = require('express');
const shopsController = require('../controllers/shopsController');
const errorHandler = require('../controllers/errorController');

const router = express.Router();

// router.route('/')
//     .get(shopsController.getShops)
//     .post(shopsController.addShop)

//////////////////// CHANGED ROUTER //////////////////////////

router.get('/', async(req, res, next) => {
    try {
        const response = await shopsController.getShops();

        res.status(200).json({
            response
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    }
});

router.post('/', async(req, res, next) => {
    try {
        const newShop = await shopsController.addShop(req.body);

        res.status(201).json({ newShop });
    } catch (error) {
        next(errorHandler(error, req, res, next))
    };
});

//////////////////////////////////////////////////////////////

module.exports = router;