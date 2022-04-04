const List = require('../models/listModel');
const errorHandler = require('./errorController');

// const getShoppingLists = async (req, res, next) => {
//     try {
//         const shoppingLists = await List.find().populate({
//             path: 'shop'
//         });
    
//         res.status(200).json({
//             status: 'Success',
//             data: {
//                 shoppingLists
//             }
//         });
//     } catch (error) {
//         return {
//             status: 'Error',
//             message: error.message,
//             data: { error }
//         }; 
//     };
// };

// const getList = async (req, res, next) => {
//     try {
//         const query = await List.find({name: 'List'});

//         res.status(200).json({
//             status: 'Success',
//             data: query
//         });
//     } catch (error) {
//         return {
//             status: 'Error',
//             message: error.message,
//             data: { error }
//         }; 
//     };
// };

// const addList = async (req, res, next) => {
//     try {
//         const newList = await List.create(req.body);

//         res.status(201).json({
//             status: 'Success',
//             message: 'New List created',
//             data: {
//                 newList
//             }
//         });
//     } catch (error) {
//         return {
//             status: 'Error',
//             message: error.message,
//             data: { error }
//         }; 
//     };
// };


//////////////////// CHANGED CONTROLLER //////////////////////////
const getShoppingLists = async() => {
    try {
        const response = await List.find()
            .populate({ path: 'shop' })
            .populate({ path: 'items' });

        return {
            status: 'Success',
            data: { response }
        }
    } catch (error) {
        return {
            status: 'Error',
            message: error.message,
            data: { error }
        };
    };
};

const getList = async () => {
    try {
        const shoppingList = await List.find({name: 'List'})
            .populate({ path: 'shop' })
            .populate({ path: 'items', populate: { path: 'category', model: 'Category' } })

        return {
            status: 'Success',
            data: { shoppingList }
        };
    } catch (error) {
        return {
            status: 'Error',
            message: error.message,
            data: { error }
        }; 
    };
};

const addList = async (body) => {
    try {
        const newList = await List.create(body);

        return{
            status: 'Success',
            message: 'New List created',
            data: {
                newList
            }
        };
    } catch (error) {
        return {
            status: 'Error',
            message: error.message,
            data: { error }
        }; 
    };
};

const addItemToList = async (listName, itemId) => {
    try {
        const list = await List.findOne({listName});
        
        await list.items.push(itemId);
        await list.save();

        return {
            status: 'Success',
            data: { list }
        };   
    } catch (error) {
        return {
            status: 'Error',
            message: error.message,
            data: { error }
        }; 
    };
};

const removeItemFromList = async (listName, itemId) => {
    try {
        const list = await List.findOne({name: listName});

        await list.items.pull(itemId);
        await list.save();
        
        return {
            status: 'Success',
            message: 'Item Deleted',
            data: null
        }; 
    } catch (error) {
        return {
            status: 'Error',
            message: error.message,
            data: { error }
        }; 
    };
};

//////////////////////////////////////////////////////////////////
module.exports = { getShoppingLists, getList, addList, addItemToList, removeItemFromList }