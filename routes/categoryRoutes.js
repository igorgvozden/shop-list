const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const validator = require('../utils/validateReq');
const router = express.Router();

// router.route('/')
//     .get(categoriesController.getCategories)
//     .post(categoriesController.addCategory)

//////////////////// CHANGED ROUTER //////////////////////////

router.get('/', async(req, res, next) => {
    try {
        const response = await categoriesController.getCategories();
        
        res.status(200).json( response );
    } catch (error) {
        next(error);
        // next(new AppError(error.message, 400));
    }
});

router.post('/', [...validator.validateCategory], async(req, res, next) => {
    try {
        const response = await categoriesController.addCategory(req.body);
        
        res.status(201).json( response );
    } catch (error) {
        next(error);
        // next(new AppError(error.message, 400));
    };
});

//////////////////////////////////////////////////////////////

module.exports = router;