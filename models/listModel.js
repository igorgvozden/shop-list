const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'List must have a Name']
    },
    items: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Item'
    }],
    shop: {
        type: mongoose.Schema.ObjectId,
        ref: 'Shop'
    }
},
{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

listSchema.pre(/find^/, function(next) {
    this.populate('items').populate({
        path: 'item',
        select: 'name'
    });
    this.populate('shop').populate({
        path: 'shop',
        select: 'name'
    });
    next();
});

const List = mongoose.model('List', listSchema);

module.exports = List;