const Item = require('../models/itemModel');
const errorHandler = require('../controllers/errorController');

exports.getItems = async (req, res, next) => {
    try {
        const items = await Item.find();

        res.status(200).json({
            status: 'Success',
            data: {
                items
            }
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};

exports.addItem = async (req, res, next) => {
    try {
        const newItem = await Item.create(req.body);

        res.status(201).json({
            status: 'Success',
            message: 'New Item created!',
            data: {
                newItem
            }
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};