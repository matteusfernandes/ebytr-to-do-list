const tasksModels = require('../models');

module.exports = async () => {
  const tasks = await tasksModels.findAll();

  return tasks;
};
