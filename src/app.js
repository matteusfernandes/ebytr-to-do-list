const express = require('express');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasksRoutes');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.use(tasksRoutes);

app.use(middlewares.error);

module.exports = app;
