const Item = require('../models/itemModel');
const errorHandler = require('../controllers/errorController');

const getAllItems = async (req, res, next) => {
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

const getItem = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.id);

        res.status(200).json({
            status: 'Success',
            data: {
                item
            }
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};

const updateItem = async (req, res, next) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // returns updated objecct - default returns object before update
            runValidators: true // runs validators defined in model
        });

        res.status(200).json({
            status: 'Success',
            data: {
                item
            }
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};

const deleteItem = async (req, res, next) => {
    try {
        await Item.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'Success',
            data: null
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};

const addItem = async (req, res, next) => {
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

module.exports = { getItem, getAllItems, addItem, updateItem, deleteItem }