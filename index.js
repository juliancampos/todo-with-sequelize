require('dotenv').config();

const Db = require('./lib/database/db');
const server = require('./lib/server');
const logger = require('./lib/common/logger');

(async function startServer() {
   try {
      await Db.connect();
      await server.start();
   } catch (error) {
      logger.error(error);      
   }
})();