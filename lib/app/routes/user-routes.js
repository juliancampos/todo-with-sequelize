const { userController } = require('../controllers');

module.exports = (app) => {
   app.post('/users', userController.post);
   app.get('/users', userController.getAll);
   app.put('/users/:userId', userController.put);
}
