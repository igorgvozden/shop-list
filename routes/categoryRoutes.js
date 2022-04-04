const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const errorHandler = require('../controllers/errorController');
const validator = require('../utils/validateReq');

const router = express.Router();

// router.route('/')
//     .get(categoriesController.getCategories)
//     .post(categoriesController.addCategory)

//////////////////// CHANGED ROUTER //////////////////////////

router.get('/', async(req, res, next) => {
    try {
        const response = await categoriesController.getCategories();
        
        response.status === 'Success' ? res.status(201).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    }
});

router.post('/', [...validator.validateCategory], async(req, res, next) => {
    try {
        const response = await categoriesController.addCategory(req.body);
        
        response.status === 'Success' ? res.status(201).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
});

//////////////////////////////////////////////////////////////

module.exports = router;