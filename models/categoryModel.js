const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category must have a Name'],
        unique: [true, 'This Category already exists!']
    },
    description: String
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;