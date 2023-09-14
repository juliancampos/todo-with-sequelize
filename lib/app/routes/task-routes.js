const { taskController } = require('../controllers');

module.exports = (app) => {
   app.get('/tasks', taskController.getAll);
   app.post('/tasks/user/:userId', taskController.post);
   app.put('/tasks/:taskId', taskController.put);
}
