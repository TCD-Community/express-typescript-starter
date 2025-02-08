import http from 'http';
import app from './app';
import config from './config/env';
import logger from './config/logger';

const server = http.createServer(app);

server.listen(config.port, () => {
	logger.info(`Server is running on port ${config.port}`);
});
