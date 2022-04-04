const express = require('express');
const itemController = require('../controllers/itemController');
const errorHandler = require('../controllers/errorController');

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

        response.status === 'Success' ? res.status(200).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
});

router.get('/:id', async(req, res, next) => {
    try {
        const response = await itemController.getItem(req.params.id);

        response.status === 'Success' ? res.status(200).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
});

router.post('/', async(req, res, next) => {
    try {
        const response = await itemController.addItem(req.body);

        response.status === 'Success' ? res.status(201).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
});

router.patch('/:id', async(req, res, next) => {
    try {
        const response = await itemController.updateItem(req.params.id, req.body);

        response.status === 'Success' ? res.status(200).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
});

router.delete('/:id', async(req, res, next) => {
    try {
        const response = await itemController.deleteItem(req.params.id);

        res.status(204).json({ response });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
});

//////////////////////////////////////////////////////////////

module.exports = router;