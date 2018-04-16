var express = require('express');
var fs = require('fs');
var moment = require('moment');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var multipart = require('connect-multiparty');

var multipartMiddleware = multipart();
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, '/public')));


app.post('/upload-face', multipartMiddleware, (req, res) => {
  var stamp = moment().format('YYYYMMDDhhmmss');
  var filename = `face-${stamp}.jpg`;
  var filepath = path.join(__dirname, '..', 'public', 'uploads', filename);

  var image = req.files.file;
  var stream = fs.createReadStream(image.path).pipe(fs.createWriteStream(filepath));

  stream.on('close', (err) => {
    fs.unlink(image.path, () => {
      res.send({
        response: 'Hello World!',
        fileurl: `/uploads/${filename}`
      });
    });
  });
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));
