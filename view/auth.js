const express = require('express')
const app = express.Router();
const { signupHandle, loginHandle } = require('../controller/mongo');

app.post('/login', loginHandle);
app.post('/signup', signupHandle);

module.exports = app;