const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const bubbleSort = require('./routes/bubble-sort.js');
const quickSort = require('./routes/quick-sort.js');

const app = express();

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/bubble-sort', bubbleSort);
app.use('/quick-sort', quickSort);




module.exports = app;