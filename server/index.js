const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('./controllers.js');
const db = require('../db/index.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

app.get('/api/wine-list/all', controllers.getAll);
app.post('/api/wine-list/create', controllers.createEntry);
app.put('/api/wine-list/update', controllers.updateEntry);
app.delete('/api/wine-list/remove', controllers.deleteEntry);
