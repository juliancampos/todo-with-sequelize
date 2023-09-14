require('dotenv').config();
const packageData = require('../../../package.json');

const serviceName = packageData.name;

const {
   DATABASE_NAME,
   DATABASE_USER,
   DATABASE_PASSWORD,
   DATABASE_DIALECT,
   DATABASE_HOST,
   DATABASE_PORT,
   PORT
} = process.env;


module.exports = {
   DATABASE_NAME,
   DATABASE_USER,
   DATABASE_PASSWORD,
   DATABASE_DIALECT,
   DATABASE_HOST,
   DATABASE_PORT,
   PORT,
   serviceName
};

