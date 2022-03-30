const Shop = require('../models/shopModel');
const errorHandler = require('./errorController');

exports.getShops = async (req, res, next) => {
    try {
        const shops = await Shop.find();

        res.status(200).json({
            status: 'Success',
            data: shops
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};

exports.addShop = async (req, res, next) => {
    try {
        const newShop = await Shop.create(req.body);

        res.status(200).json({
            status: 'Success',
            message: 'Shop created!',
            data: {
                Shop: newShop
            }
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};