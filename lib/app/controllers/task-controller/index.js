const taskService = require('../../services/task-service');

const getAll = async (req, res) => {
   try {
      const result = await taskService.findAll();
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json(error.message);
   }
};


const post = (req, res) => {
   try {
      const { userId } = req.params;
      const result = taskService.create(userId, req.body);
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json(error.message);
   }
};

const put = (req, res) => {
   try {
      const { taskId } = req.params;
      const result = taskService.update(taskId, req.body);
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json(error.message);
   }
}

module.exports = {
   getAll,
   post,
   put
};
