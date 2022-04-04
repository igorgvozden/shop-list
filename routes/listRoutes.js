const express = require('express');
const listControler = require('../controllers/listsController');

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

        response.status === 'Success' ? res.status(200).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        console.log(error);
        return next(error);
    };
});

router.get('/shopping-list', async(req, res, next) => {
    try {
        const response = await listControler.getList();

        response.status === 'Success' ? res.status(200).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        console.log(error);
        return next(error);
    };
});

router.post('/', async(req, res, next) => {
    try {
        const response = await listControler.addList(req.body);
        
        response.status === 'Success' ? res.status(201).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        console.log(error);
        next(error);
    };
});

router.post('/add-to-list', async (req, res, next) => {
    try {
        const response = await listControler.addItemToList(req.body.listName, req.body.itemId);
       
        console.log('response', response);
        response.status === 'Success' ? res.status(201).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        console.log(error);
        next(error);
    };
});

router.delete('/remove-from-list', async (req, res, next) => {
    try {
        const response = await listControler.removeItemFromList(req.body.listName, req.body.itemId);
       
        console.log('response', response);
        response.status === 'Success' ? res.status(204).json({ response }) : res.status(400).json({ response });
    } catch (error) {
        console.log(error);
        next(error);
    };
});

//////////////////////////////////////////////////////////////

module.exports = router;