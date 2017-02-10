var express = require('express');
var morgan = require('morgan');
var path = require('path');
var port = process.env.port || 3000;
var multer = require('multer');

var upload = multer();
var app = express();

 app.get('/', function (req, res) {
 	res.sendFile(path.join(__dirname + '/index.html'));
 });


app.listen(port, function () {
	console.log('listening on port ' + port);
});

app.post('/upload', upload.single('file'), function (req, res) {
	res.json(req.file);
});
