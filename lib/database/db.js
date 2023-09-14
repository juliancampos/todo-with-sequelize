const Sequelize = require('sequelize');
const config = require('../common/config');

let instance = undefined;

class Db {
   connection = undefined;
   
   static async getConnection() {
      if (instance) {
         return instance;
      }

      const connection = this.connect();
      instance = connection;
      return connection;
   }

   static async connect() {
      const sequelize = new Sequelize(
         config.DATABASE_NAME,
         config.DATABASE_USER,
         config.DATABASE_PASSWORD,
         {
            dialect: config.DATABASE_DIALECT,
            host: config.DATABASE_HOST,
            port: config.DATABASE_PORT
         });


      await sequelize.authenticate();
      instance = sequelize;

      return sequelize;
   }
}

module.exports = Db;
