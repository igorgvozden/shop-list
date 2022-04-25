const List = require('../models/listModel');
const AppError = require('../utils/appError');

//////////////////// CHANGED CONTROLLER //////////////////////////
const getShoppingLists = async() => {
    try {
        const lists = await List.find()
            .populate({ path: 'shop' })
            .populate({ path: 'items', populate: { path: 'category', model: 'Category' } });

        return {
            lists
        }
    } catch (error) {
        throw new AppError(`Ooops! ${error.message}`, 400);
    };
};

const getList = async () => {
    try {
        const shoppingList = await List.find({name: 'List'})
            .populate({ path: 'shop' })
            .populate({ path: 'items', populate: { path: 'category', model: 'Category' } });

        return {
            shoppingList
        };
    } catch (error) {
        throw new AppError(`Ooops! ${error.message}`, 400); 
    };
};

const addList = async (body) => {
    try {
        const newList = await List.create(body);

        return{
            newList
        };
    } catch (error) {
        throw new AppError(`${error.message.startsWith('E11000')? 'List Name already exists!' : error.message}`, 400);
    };
};

const addItemToList = async (listName, itemId) => {
    try {
        const list = await List.findOne({'name': listName});
        
        if(!list) throw new AppError(`List: ${listName}, Does not exist`, 404);
        if(!itemId) throw new AppError(`Which Item would You like to add?`, 400);

        await list.items.push(itemId);
        await list.save();

        return {
            list
        };   
    } catch (error) {
        throw new AppError(`Ooops! ${error.message}`, error.statusCode || 400);  
    };
};

const removeItemFromList = async (listName, itemId) => {
    try {
        const list = await List.findOne({'name': listName});

        if(!list) throw new AppError(`List: ${listName}, Does not exist`, 404);
        if(!itemId) throw new AppError(`Which Item would You like to remove?`, 400);

        await list.items.pull(itemId);
        await list.save();
        
        return {
            status: 'Success',
            message: 'Item Deleted',
            data: null
        }; 
    } catch (error) {
        throw new AppError(`Ooops! ${error.message}`, 400); 
    };
};

//////////////////////////////////////////////////////////////////
module.exports = { getShoppingLists, getList, addList, addItemToList, removeItemFromList }