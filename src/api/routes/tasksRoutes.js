const express = require('express');
const tasksController = require('../controllers');

const tasksRouter = express.Router();

tasksRouter.get('/', tasksController.list);

module.exports = tasksRouter;
