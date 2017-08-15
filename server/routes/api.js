const express = require('express');

const route = express.Router();

/** Get a list of datas from the db */
route.get('/v1', function (req, res) {
    res.send({type:'GET'});
});

/** POST a new data to the db */
route.post('/v1', function (req, res) {
    res.send({type: 'POST'});
});

/** Update a data in the db */
route.put('/v1/:id', function (req, res) {
    res.send({type: 'PUT'});
});

/** Delete a data in th db */
route.delete('/v1/:id', function (req, res) {
    res.send({type: 'DELETE'});
});

module.exports = route;