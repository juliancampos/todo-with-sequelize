const Sequelize = require('sequelize');
const db = require('../db');

module.exports = () => {
   return db.getConnection().then((conn) => {
      const UserModel = conn.define('user', {
         id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
         },
         name: {
            type: Sequelize.STRING,
            allowNull: false
         }
      });
      return UserModel;
   });
}
