const { format } = require('express/lib/response');
const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'List must have a Name']
    },
    created : {
        type: Date,
        default: Date.now()
    },
    updated: String,
    items: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Item'
    }],
    shop: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Shop'
    }]
},
{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

const List = mongoose.model('List', listSchema);

module.exports = List;