const statusCodes = require('../utils/statusCodes');
const tasksService = require('../services');

module.exports = async (_request, response, next) => {
  try {
    const listOfTasks = await tasksService.list();

    return response.status(statusCodes.success).json(listOfTasks);
  } catch (error) {
    return next(error);
  }
};
