const bunyan = require('bunyan');
const config = require('../config');

const logger = bunyan.createLogger({
   name: config.serviceName,
   stream: process.stdout
})

module.exports = logger;
