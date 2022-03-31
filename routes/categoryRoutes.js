const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const errorHandler = require('../controllers/errorController');

const router = express.Router();

// router.route('/')
//     .get(categoriesController.getCategories)
//     .post(categoriesController.addCategory)

//////////////////// CHANGED ROUTER //////////////////////////

router.get('/', async(req, res, next) => {
    try {
        const response = await categoriesController.getCategories();
        
        res.status(200).json({ response });
    } catch (error) {
        errorHandler(error, req, res, next);
    }
});

router.post('/', async(req, res, next) => {
    try {
        const newCategory = await categoriesController.addCategory(req.body);
        
        res.status(201).json({ newCategory });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
});

//////////////////////////////////////////////////////////////

module.exports = router;