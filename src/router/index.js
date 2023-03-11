const express = require('express');
const router = express.Router();
const logger = require('../common/logger');
const packJson = require("../package.json");

testVar = process.env.TEST_VAR || 'Value from code'
propVar = process.env.PROP_VAR
hostName = process.env.HOSTNAME

router
    .use(function timeLog(req, res, next) {
        if(req.url !== "/ping") {
            logger.info('%s - %s', req.headers['x-real-ip'], req.url);
        }
        next();
    })

    .get('/ping', function(req, res) {
        res
            .status(200)
            .send({
                'name': packJson.name,
                'hostname': hostName
            });
    })

    .get('/version', function(req, res) {
        res
            .status(200)
            .send({
                'version': packJson.version,
                'hostname': hostName
            });
    })

    .get('/variables', function(req, res) {
        res
            .status(200)
            .send({
                'testVar': testVar,
                'propVar': propVar,
                'hostname': hostName
            });
    })

module.exports = router;