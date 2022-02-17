const express = require('express');
const tasksController = require('../controllers');

const userRouter = express.Router();

userRouter.get('/', tasksController.list);

module.exports = userRouter;
