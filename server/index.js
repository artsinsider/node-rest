const express = require('express');
const api = require('./routes/api')

/** Set up express app */
const app = express();
app.use('/', api);

/** listen for request */
const IdentifyPort = process.env.port || 4000;

app.listen(IdentifyPort, function() {
    console.log('Now listen ' + IdentifyPort + ' port.');
});
