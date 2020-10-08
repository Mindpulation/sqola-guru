const express = require('express')
const app = express.Router();
const { signupHandle, loginHandle } = require('../controller/mongo');
const { loginList, signupList } = require('../validator/index');


app.post('/login', loginList, loginHandle);
app.post('/signup', signupList, signupHandle);

module.exports = app;