const express = require('express');
const app = express.Router();

const {updateProfile} = require('../controller/mongo');

app.put('/update', updateProfile);

module.exports = app;