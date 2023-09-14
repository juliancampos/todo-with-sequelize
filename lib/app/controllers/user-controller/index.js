const userService = require('../../services/user-service'); 

const getAll = async (req, res) => {
   try {
      const result = await userService.findAll();
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json(error.message);
   }
};

const post = (req, res) => {
   try {
      const result = userService.create(req.body);
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json(error.message);
   }
};

const put = async (req, res) => {
   try {
      const { userId } = req.params;
      const result = await userService.update(userId, req.body);
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json(error.message);
   }
};

module.exports = {
   getAll,
   post,
   put
};
