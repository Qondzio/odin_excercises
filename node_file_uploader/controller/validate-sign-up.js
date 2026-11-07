const {body} = require("express-validator");
const query=require('../prisma/queries.js');

const validateUser=[
    body('username').trim()
        .matches(/^\S+$/).withMessage('No spaces are allowed in username')
        .isLength({min: 3}).withMessage('Username must contain minimum 3 characters')
        .custom(async value => {
            const user = await query.isUserTaken(value);
            if (user) {
                throw new Error('Username already in use');
            }
        }).withMessage('This username is already taken'),
    body('password').trim()
        .matches(/^\S+$/).withMessage('No spaces are allowed in password')
        .isLength({min: 3}).withMessage('Password must contain minimum 3 characters'),
    body('confirmPassword').custom((value, { req }) => {
        return value === req.body.password;
    }).withMessage('Confirm password does not match'),
]

const validateDirectory=[
    body('directoryName').trim().blacklist(' ')
]
module.exports={validateUser, validateDirectory};