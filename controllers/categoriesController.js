const Category = require('../models/categoryModel');
const AppError = require('../utils/appError');

//////////////////// CHANGED CONTROLLER //////////////////////////

const getCategories = async () => {
    try {
        const categories = await Category.find();

        return {
            status: 'Success',
            data: { categories }
        }
    } catch (error) {
        throw new AppError(`Ooops! ${error.message}`, 400); 
    };
};

const addCategory = async (body) => {
    try {
        const newCategory = await Category.create(body);

        return {
            status: 'Success',
            message: 'New Category added!',
            data: { newCategory }
        }
    } catch (error) {
        throw new AppError(`${error.message.startsWith('E11000')? 'Category Name already exists!' : error.message}`, 400);
    };
};

module.exports = { getCategories, addCategory };
