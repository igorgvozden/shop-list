const ListModel = require('../models/listModel');
const errorHandler = require('./errorController');

exports.getShoppingLists = async (req, res, next) => {
    try {
        const shoppingLists = await ListModel.find().populate({
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

exports.getList = async (req, res, next) => {
    try {
        const shoppingList = await ListModel.findOne({name: 'Weekend Shopping'}).populate(['shop', {path: 'shop'}]);
        console.log(shoppingList)
        res.status(200).json({
            status: 'Success',
            data: shoppingList
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};