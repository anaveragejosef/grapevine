const fs = require('fs');
const AWS = require('aws-sdk');
const config = require('./config.js');

const s3 = new AWS.S3({
  accessKeyId: config.ACCESS_KEY_ID,
  secretAccessKey: config.SECRET_KEY
});

const uploadFile = (fileName, res) => {
  const fileContent = fs.readFileSync(fileName);
  const fileArr = fileName.split('/');
  const params = {
    Bucket: config.BUCKET_NAME,
    Body: fileContent,
    Key: fileArr[fileArr.length - 1],
    ContentType: "image/jpeg"
  };
  console.log('before upload');
  s3.upload(params, function(err, data) {
    if (err) {
      res.status(400).send(err);
    }
    console.log(`File uploaded successfully - ${data.Location}`);
    res.status(201).send(data);
  });
};

module.exports = { uploadFile };