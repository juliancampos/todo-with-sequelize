const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./user-model');

// Task.belongsTo(User, { constraint: true, foreignKey: 'userId' });

module.exports = async () => {
   return db.getConnection().then((conn) => {
      const taskModel = conn.define('task', {
         id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
         },
         name: {
            type: Sequelize.STRING,
            allowNull: false
         },
         userId: {
            type: Sequelize.INTEGER,
            references: {
               model: 'users',
               keyId: 'id'
            }
         }
      });
      return taskModel;
   })
}
