const express = require('express');
const app = express();

var routes = require('./routes.js');

app.use('/test', routes);

app.listen(8080);