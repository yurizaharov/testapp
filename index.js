const express = require('express');
const packJson = require('./package.json');

const app = express();

testVar = process.env.TEST_VAR || 'Value from code'

app
    .get('/ping', function(req, res) {
        res
            .status(200)
            .send({'name': packJson.name});
    })

    .get('/version', function(req, res) {
        res
            .status(200)
            .send({'version': packJson.version});
    })

    .get('/variable', function(req, res) {
        res
            .status(200)
            .send({'testVar': testVar});
    })

app.listen(8080, (err) => {
    if (err) console.log(err);
    console.log('Server has been started');
});
