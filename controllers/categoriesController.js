const Category = require('../models/categoryModel');
const AppError = require('../utils/appError');

//////////////////// CHANGED CONTROLLER //////////////////////////

const getCategories = async () => {
    try {
        const categories = await Category.find();

        return {
            categories
        }
    } catch (error) {
        throw new AppError(`Ooops! ${error.message}`, 400); 
    };
};

const addCategory = async (body) => {
    try {
        const newCategory = await Category.create(body);

        return {
           newCategory
        }
    } catch (error) {
        throw new AppError(`${error.message.startsWith('E11000')? 'Category Name already exists!' : error.message}`, 400);
    };
};

module.exports = { getCategories, addCategory };
