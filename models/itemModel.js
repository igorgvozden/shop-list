const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Item must have a Name!'],
        trim: true,
        unique: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    quantity: {
        type: Number,
        default: 1,
        min: [1, 'Quantity cannot be less than 1.']
    }
},
{
    timestamps: {createdAt: 'created'}
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;