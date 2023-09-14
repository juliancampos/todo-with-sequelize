
const userModel = require('../../database/models/user-model');
const userRepository = require('../repositories')('userModel', userModel);

const create = (data) => {
   const result = userRepository.save(data);
   return result;
};

const findOne = (userId) => {
   const result = userRepository.findOne(userId);
   return result;
}

const update = (userId, data) => {
   const result = userRepository.updateOne(userId, data);
   return result;
};

const findAll = () => {
   const result = userRepository.findAll();
   return result;
};

module.exports = {
   create,
   findAll,
   update,
   findOne
};
