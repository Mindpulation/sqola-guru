const express = require('express');
const app = express.Router();

const {updateProfile} = require('../controller/mongo');
const { updateProfileList } = require('../validator/index');

app.put('/update',updateProfileList, updateProfile);

module.exports = app;