const Category = require('../models/categoryModel');
const errorHandler = require('./errorController');

exports.getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find();

        res.status(200).json({
            status: 'Success',
            data: categories
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};

exports.addCategory = async (req, res, next) => {
    try {
        const newCategory = await Category.create(req.body);

        res.status(201).json({
            status: 'Success',
            message: 'Category created!',
            data: {
                category: newCategory
            }
        });
    } catch (error) {
        next(errorHandler(error, req, res, next));
    };
};