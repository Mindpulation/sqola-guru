const joi = require('joi');

const login = joi.object().keys({
    email: joi.string().required().email().exist(),
    password: joi.string().required()
});

const signup = joi.object().keys({
    email: joi.string().required().email().exist(),
    username: joi.string().required().min(4),
    password: joi.string().required().min(4),
});

const updateProfile = joi.object({
    find: joi.object().required(),
    update: joi.object().required()
});

module.exports = { login, signup, updateProfile }