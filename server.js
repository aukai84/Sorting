const express = require('express');
const bodyParser = require('body-parser');
const bubbleSort = require('./routes/bubble-sort.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/bubble-sort', bubbleSort);




module.exports = app;