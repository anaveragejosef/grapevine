const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
let upload = multer({ dest: 'uploads/' })
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
app.post('/api/upload-image', upload.single('photo'), (req, res) => {
  console.log('server');
  console.log('Req.file = ', req.file);
  console.log('Req.body = ', req.body);
})
app.put('/api/wine-list/update', controllers.updateEntry);
app.delete('/api/wine-list/remove', controllers.deleteEntry);
