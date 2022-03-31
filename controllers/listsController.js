const List = require('../models/listModel');
const errorHandler = require('./errorController');

const getShoppingLists = async (req, res, next) => {
    try {
        const shoppingLists = await List.find().populate({
            path: 'shop'
        });
    
        res.status(200).json({
            status: 'Success',
            data: {
                shoppingLists
            }
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};

const getList = async (req, res, next) => {
    try {
        const query = await List.find({name: 'List'});

        res.status(200).json({
            status: 'Success',
            data: query
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};

const addList = async (req, res, next) => {
    try {
        const newList = await List.create(req.body);

        res.status(201).json({
            status: 'Success',
            message: 'New List created',
            data: {
                newList
            }
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};

module.exports = { getShoppingLists, getList, addList }