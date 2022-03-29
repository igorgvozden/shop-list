const mongoose = require('mongoose');
const Schema = mongoose;

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Item must have a Name!']
    },
    created: {
        type: Date,
        default: Date.now()
    },
    category: {
        type: Schema.ObjectId,
        ref: 'Category',
        required: [true, 'Item must have a Categoty!']
    },
    quantity: {
        type: Number,
        default: 1
    }
});

itemSchema.pre(/^find/, function(next) {
    this.populate('category').populate({
        path: 'category',
        select: 'name'
    });
    next();
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;