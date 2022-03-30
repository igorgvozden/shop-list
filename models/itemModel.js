const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Item must have a Name!']
    },
    created: {
        type: Date,
        default: Date.now()
    },
    category: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'Item must have a Category!']
    }],
    quantity: {
        type: Number,
        default: 1
    }
},
{
    timestamps: {createdAt: 'created'}
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;