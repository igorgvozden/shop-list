const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'List must have a Name']
    },
    created : String,
    updated: String,
    items: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Item'
    }],
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop'
    }
},
{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

listSchema.pre(/find^/, function (next) {
    this.populate('shop');
    this.populate('items');
    next();
});

const List = mongoose.model('List', listSchema);

module.exports = List;