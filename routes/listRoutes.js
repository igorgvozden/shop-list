const express = require('express');
const listControler = require('../controllers/listsController');
const validator = require('../utils/validateReq');

const router = express.Router();

// router.route('/')
//     .get(listControler.getShoppingLists)
//     .post(listControler.addList)

// router.route('/shopping-list')
//     .get(listControler.getList);

//////////////////// CHANGED ROUTER //////////////////////////

router.get('/', async(req, res, next) => {
    try {
        const response = await listControler.getShoppingLists();

        res.status(200).json( response );
    } catch (error) {
        next(error);
    };
});

router.get('/shopping-list', async(req, res, next) => {
    try {
        const response = await listControler.getList();

        res.status(200).json( response );
    } catch (error) {
        next(error);
    };
});

router.post('/', [...validator.validateList], async(req, res, next) => {
    try {
        const response = await listControler.addList(req.body);
        
        res.status(201).json( response );
    } catch (error) {
        next(error);
    };
});

router.post('/add-to-list', async (req, res, next) => {
    try {
        const response = await listControler.addItemToList(req.body.listName, req.body.itemId);
       
        res.status(201).json( response );
    } catch (error) {
        next(error);
    };
});

router.delete('/remove-from-list', async (req, res, next) => {
    try {
        const response = await listControler.removeItemFromList(req.body.listName, req.body.itemId);
       
        res.status(204).json( response );
    } catch (error) {
        next(error);
    };
});

//////////////////////////////////////////////////////////////

module.exports = router;