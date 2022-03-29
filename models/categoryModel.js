const mongoose = requre('mongoose');
const Schema = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Category must have a Name']
    },
    description: String
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;