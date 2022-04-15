const Item = require('../models/itemModel');
const AppError = require('../utils/appError');

//////////////////// CHANGED CONTROLLER //////////////////////////
const getAllItems = async () => {
    try {
        const items = await Item.find()
            .populate({ path: 'category' });

        return {
            items
        };
    } catch (error) {
        throw new AppError(`Ooops! ${error.message}`, 400);
    };
};

const getItem = async (id) => {
    try {
        const item = await Item.findById(id)
            .populate({ path: 'category' });

            if (!item) throw new AppError('This Item does not exist', 404);

        return {
            item
        };
    } catch (error) {
        throw new AppError(`Ooops! ${error.message}`, error.statusCode || 400);
    };
};

const addItem = async (body) => {
    try {
        const newItem = await Item.create(body);

        return {
            newItem
        };
    } catch (error) {
        throw new AppError(`${error.message.startsWith('E11000')? 'Item already exists!' : error.message}`, 400);
    };
};

const updateItem = async (id, body) => {
    try {
        const item = await Item.findByIdAndUpdate(id, body, {
            new: true, // returns updated object - default returns object before update
            runValidators: true // runs validators defined in model
        });

        return {
            item
        };
    } catch (error) {
        throw new AppError(`Ooops! ${error.message}`, 400);
    };
};

const deleteItem = async (id) => {
    try {
        await Item.findByIdAndDelete(id);

        return {
            status: 'Success',
            message: 'Item Deleted!',
            data: null
        };
    } catch (error) {
        throw new AppError(`Ooops! ${error.message}`, 400);
    };
};

//////////////////////////////////////////////////////////////////

module.exports = { getItem, getAllItems, addItem, updateItem, deleteItem };