const express = require('express');
const config = require('../common/config');
const logger = require('../common/logger');
const routes = require('../app/routes');

const app = express();

const start = async () => {
	const port = config.PORT;

	app.use(express.json());
	await routes.load(app);

	app.listen(port, () => {
		logger.info(`running at port: ${port}`)
	});
}

const stop = () => {
	app.stop();
}

module.exports = {
   start,
   stop
}