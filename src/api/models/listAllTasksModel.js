const tasksModel = require('./index');

module.exports = async () => {
  const tasks = await tasksModel.connection()
    .then((db) => db.collection('tasks').find().toArray());

  return tasks;
};
