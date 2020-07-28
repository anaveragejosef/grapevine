const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const controllers = require('./controllers.js');
const db = require('../db/index.js');
const s3Uploader = require('./upload.js');

const app = express();
const port = 3000;
const upload = multer({
  dest: __dirname + '/uploads/',
  limits: { fieldSize: 25 * 1024 * 1024 }
})

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

app.get('/api/wine-list/all', controllers.getAll);
app.post('/api/wine-list/create', controllers.createEntry);
app.post('/api/upload-image', upload.single('photo'), (req, res) => {
  let filePath = __dirname + '/uploads/' + req.file.filename;
  let s3URL = s3Uploader.uploadFile(filePath, res);
});
app.put('/api/wine-list/update', controllers.updateEntry);
app.delete('/api/wine-list/remove', controllers.deleteEntry);
