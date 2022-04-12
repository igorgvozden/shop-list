const express = require('express');
const itemController = require('../controllers/itemController');
const validator = require('../utils/validateReq');

const router = express.Router();

// router.route('/')
//     // .get(itemController.getAllItems)
//     .post(itemController.addItem)

// router.route('/:id')
//     // .get(itemController.getItem)
//     .patch(itemController.updateItem)
//     .delete(itemController.deleteItem)


//////////////////// CHANGED ROUTER //////////////////////////

router.get('/', async(req, res, next) => {
    try {
        const response = await itemController.getAllItems();

        res.status(200).json( response )
    } catch (error) {
        next(error);
        // next(new AppError(error.message, 400));
    };
});

router.get('/:id', async(req, res, next) => {
    try {
        const response = await itemController.getItem(req.params.id);

        res.status(200).json( response );
    } catch (error) {
        // next(new AppError(error.message, 400));
        next(error);
    };
});

router.post('/', [...validator.validateItem], async(req, res, next) => {
    try {
        const response = await itemController.addItem(req.body);

        res.status(201).json( response );
    } catch (error) {
        next(error);
        // next(new AppError(error.message, error.statusCode));
    };
});

router.patch('/:id', async(req, res, next) => {
    try {
        const response = await itemController.updateItem(req.params.id, req.body);

        res.status(200).json( response );
    } catch (error) {
        next(error);
        // next(new AppError(error.message, error.statusCode));
    };
});

router.delete('/:id', async(req, res, next) => {
    try {
        const response = await itemController.deleteItem(req.params.id);

        res.status(204).json( response );
    } catch (error) {
        next(error);
        // next(new AppError(error.message, 400));
    };
});

//////////////////////////////////////////////////////////////

module.exports = router;