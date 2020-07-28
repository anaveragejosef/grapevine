const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const multer = require('multer');
// const upload = multer({dest: 'uploads/'});
const controllers = require('./controllers.js');
const db = require('../db/index.js');

const app = express();
const port = 3000;

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
app.post('/api/upload-image', multipartMiddleware, function(req, resp) {
  console.log(req.file);
});

/* const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'uploads/')
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
  },
})
const upload = multer({ storage: Storage })
*/


app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

app.get('/api/wine-list/all', controllers.getAll);
app.post('/api/wine-list/create', controllers.createEntry);
/* app.post('/api/upload-image', upload.single('photo'), (req, res) => {
  //console.log('Req = ', req);
  console.log('Req.file = ', req.file);
  console.log('Req.body = ', req.body);
}); */
app.put('/api/wine-list/update', controllers.updateEntry);
app.delete('/api/wine-list/remove', controllers.deleteEntry);
