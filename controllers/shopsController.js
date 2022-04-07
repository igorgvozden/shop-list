const Shop = require('../models/shopModel');
const AppError = require('../utils/appError');

//////////////////// CHANGED CONTROLLER //////////////////////////

const getShops = async () => {
    try {
        const shops = await Shop.find();

        return {
            status: 'Success',
            data: { shops }
        }
    } catch (error) {
        throw new AppError(`Ooops! ${error.message}`, 400);
    };
};

const addShop = async(body) => {
    try {
        const newShop = await Shop.create(body);

        return {
            status: 'Success',
            message: 'New Shop Created!',
            data : { newShop }
        };
    } catch (error) {
        throw new AppError(`${error.message.startsWith('E11000')? 'Shop already exists!' : error.message}`, 400);
    };
};

module.exports = { getShops, addShop }
//////////////////////////////////////////////////////////////////