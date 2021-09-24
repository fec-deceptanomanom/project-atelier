const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');
const secrets = require('../.secret.json');

const bucketName = secrets.AWS_BUCKET_NAME;
const bucketRegion = secrets.AWS_BUCKET_REGION;
const accessKey = secrets.AWS_ACCESS_KEY;
const secretKey = secrets.AWS_SECRET_KEY;



const s3 = new S3({
  region: bucketRegion,
  secretAccessKey: secretKey,
  accessKeyId: accessKey,
});


// uploads files
function uploadFile(file) {

  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
    ContentType: file.mimetype,
  }

  return s3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile


/* files in bucket are accessed at
https://deceptanomanon.s3.amazonaws.com/<object name>
*/

/* distrubution name is:
https://d21pxc7zq467b0.cloudfront.net
*/