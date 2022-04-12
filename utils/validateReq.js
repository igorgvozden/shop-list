const { body, validationResult } = require('express-validator');

const returnValidationResult = (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const allErrors = errors.array().map(er => er.msg);
        return res.status(400).json({ "message": allErrors.join(' ... ') });
    };
    next();
};

const validateCategory = [
    body('name')
        .exists()
        .isLength({min: 1 , max: 15}).withMessage('Name this Category. Give it a purpose e.g. Snacks')
        .trim(),
        returnValidationResult,
        ////////////////////////////
    body('description')
        .exists()
        .isLength({min: 1 , max: 50}).withMessage('Describe Category with no more than 50 characters')
        .trim(),
        returnValidationResult
];

const validateItem = [
    body('name')
        .exists()
        .isLength({min: 2 , max: 15}).withMessage('Name should not be empty, name it with at least 2 characters')
        .trim(),
        returnValidationResult
];

const validateShop = [
    body('name')
        .exists()
        .isLength({min: 1 , max: 15}).withMessage('What is the name of the Shop?')
        .trim(),
        returnValidationResult,
        ////////////////////////////
    body('address')
        .exists()
        .isLength({min: 5 , max: 50}).withMessage('Address should have Street Name and a Parcel Number')
        .trim(),
        returnValidationResult,
        ///////////////////////////
    body('city')
        .exists()
        .isLength({min: 1 , max: 20}).withMessage('What City is your Shop located in?')
        .trim(),
        returnValidationResult
];

const validateList = [
    body('name')
        .exists()
        .isLength({min: 2 , max: 15}).withMessage('Name your List with at least 2 and no more than 15 characters')
        .trim(),
        returnValidationResult
];

module.exports = { validateCategory, validateShop, validateItem, validateList };