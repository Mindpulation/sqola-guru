const express = require('express');
const app = express.Router();

const { findProfile, findAll} = require('../controller/mongo');

app.post('/find', findProfile);
app.post('/findPagination', findAll);

module.exports = app;