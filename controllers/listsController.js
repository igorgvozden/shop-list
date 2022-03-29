const ListModel = require('../models/listModel');

exports.getShoppingLists = async (req, res, next) => {
    try {
        const shoppingLists = await ListModel.find();

        res.status(200).json({
            status: 'Success',
            data: {
                shoppingLists
            }
        });
    } catch (error) {
        console.log(error);
    };
};