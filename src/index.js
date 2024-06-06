const express = require('express');
const logger = require('./common/logger');

const app = express();

const metrics = require('./router/metrics');
app.use(metrics);

const router = require('./router');
app.use(router);

const server = app.listen(8080, (err) => {
    if (err) logger.error(err);
    logger.info('Server has been started');
});

process.on('SIGTERM', () => {
    logger.info('SIGTERM signal received.');
    server.close(() => {
        logger.info('Closed out remaining connections');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    logger.info('SIGINT signal received.');
    server.close(() => {
        logger.info('Closed out remaining connections');
        process.exit(0);
    });
});
