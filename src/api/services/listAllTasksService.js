const tasksModels = require('../models');
const statusCodes = require('../utils/statusCodes');
const errorHandling = require('../utils/errorHandling');

module.exports = async () => {
  const tasks = await tasksModels.findAll();

  if (!tasks) {
    throw errorHandling(statusCodes.notFound, 'No tasks found.');
  }

  return tasks;
};
