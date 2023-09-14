
const userService = require('./user-service');
const taskModel = require('../../database/models/task-model');
const taskRepository = require('../repositories')('taskModel', taskModel);

const create = (userId, data) => {
   if (!userService.findOne(userId)) {
      return;
   }
   const result = taskRepository.save({
      ...data,
      user: userId
   });

   return result;
};

const update = (taskId, data) => {
   const result = taskRepository.updateOne(taskId, data);
   return result;
};

const findAll = async () => {
   const populate = {
      field: 'user',
      keys: 'name'
   }
   const result = await taskRepository.findAll(populate);
   return result;
};

module.exports = {
   create,
   findAll,
   update
};
