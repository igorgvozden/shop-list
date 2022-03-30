const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Shop must have a Name']
    },
    address: String,
    city: String
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;