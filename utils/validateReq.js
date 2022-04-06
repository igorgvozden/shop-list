const { body, validationResult } = require('express-validator');

const returnValidationResult = (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    };
    next();
};

const validateCategory = [
    body('name')
        .exists()
        .isAlphanumeric().withMessage('Name should be alphanumeric!')
        .isLength({min: 1 , max: 15}).withMessage('Name should not be empty, should be more than one and less than 15 characters')
        .trim(),
        returnValidationResult,
        ////////////////////////////
    body('description')
        .exists()
        .isLength({min: 1 , max: 50}).withMessage('Description should not be empty, should be more than one and less than 50 characters')
        .trim(),
        returnValidationResult
];

const validateItem = [
    body('name')
        .exists()
        .isAlphanumeric().withMessage('Name should be alphanumeric!')
        .isLength({min: 1 , max: 15}).withMessage('Name should not be empty, should be more than one and less than 15 characters')
        .trim(),
        returnValidationResult
];

const validateShop = [
    body('name')
        .exists()
        .isAlphanumeric().withMessage('Name should be alphanumeric!')
        .isLength({min: 1 , max: 15}).withMessage('Name should not be empty, should be more than one and less than 15 characters')
        .trim(),
        returnValidationResult,
        ////////////////////////////
    body('address')
        .exists()
        .isLength({min: 5 , max: 50}).withMessage('Address should not be empty. It should contain Street name and a number.')
        .trim(),
        returnValidationResult,
        ///////////////////////////
    body('city')
        .exists()
        .isLength({min: 1 , max: 20}).withMessage('City should not be empty!')
        .trim(),
        returnValidationResult
];

const validateList = [
    body('name')
        .exists()
        .isAlphanumeric().withMessage('Name should be alphanumeric!')
        .isLength({min: 1 , max: 15}).withMessage('Name should not be empty, should be more than one and less than 15 characters')
        .trim(),
        returnValidationResult,
];

module.exports = { validateCategory, validateShop, validateItem, validateList };