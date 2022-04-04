const Item = require('../models/itemModel');
const errorHandler = require('../controllers/errorController');

// const getAllItems = async (req, res, next) => {
//     try {
//         const items = await Item.find();

//         res.status(200).json({
//             status: 'Success',
//             data: {
//                 items
//             }
//         });
//     } catch (error) {
//         next(errorHandler(error, req, res, next));
//     };
// };

// const getItem = async (req, res, next) => {
//     try {
//         const item = await Item.findById(req.params.id);

//         res.status(200).json({
//             status: 'Success',
//             data: {
//                 item
//             }
//         });
//     } catch (error) {
//         next(errorHandler(error, req, res, next));
//     };
// };

// const updateItem = async (req, res, next) => {
//     try {
//         const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
//             new: true, // returns updated object - default returns object before update
//             runValidators: true // runs validators defined in model
//         });

//         res.status(200).json({
//             status: 'Success',
//             data: {
//                 item
//             }
//         });
//     } catch (error) {
//         next(errorHandler(error, req, res, next));
//     };
// };

// const deleteItem = async (req, res, next) => {
//     try {
//         await Item.findByIdAndDelete(req.params.id);

//         res.status(204).json({
//             status: 'Success',
//             data: null
//         });
//     } catch (error) {
//         next(errorHandler(error, req, res, next));
//     };
// };

// const addItem = async (req, res, next) => {
//     try {
//         const newItem = await Item.create(req.body);

//         res.status(201).json({
//             status: 'Success',
//             message: 'New Item created!',
//             data: {
//                 newItem
//             }
//         });
//     } catch (error) {
//         next(errorHandler(error, req, res, next));
//     };
// };

//////////////////// CHANGED CONTROLLER //////////////////////////
const getAllItems = async () => {
    try {
        const allItems = await Item.find()
            .populate({ path: 'category' });

        return {
            status: 'Success',
            allItems
        };
    } catch (error) {
        return {
            status: 'Error',
            message: `Something went wrong! Try Again : ${error.message}`
        };
    };
};

const getItem = async (id) => {
    try {
        const item = await Item.findById(id)
            .populate({ path: 'category' });

        return {
            status: 'Success',
            item
        };
    } catch (error) {
        return {
            status: 'Error',
            message: `Something went wrong! Try Again : ${error.message}`
        };
    };
};

const addItem = async (body) => {
    try {
        const newItem = await Item.create(body);

        return {
            status: 'Success',
            message: 'New Item created!',
            newItem
        };
    } catch (error) {
        return {
            status: 'Error',
            message: `Something went wrong! Try Again : ${error.message}`
        };
    };
};

const updateItem = async (id, body) => {
    try {
        const item = await Item.findByIdAndUpdate(id, body, {
            new: true, // returns updated object - default returns object before update
            runValidators: true // runs validators defined in model
        });

        return {
            status: 'Success',
            message: 'Item Updated!',
            item
        };
    } catch (error) {
        return {
            status: 'Error',
            message: `Something went wrong! Try Again : ${error.message}`
        };
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
        return {
            status: 'Error',
            message: `Something went wrong! Try Again : ${error.message}`
        };
    };
};

//////////////////////////////////////////////////////////////////

module.exports = { getItem, getAllItems, addItem, updateItem, deleteItem };