const express = require('express');
const packJson = require('./package.json');

const app = express();

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

app.listen(8080, (err) => {
    if (err) console.log(err);
    console.log('Server has been started');
});
