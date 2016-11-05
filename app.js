'use strict';

const PORT = process.env.port || 3000;

var express = require('express');
var morgan  = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var app = express();
var chalk = require('chalk');
var error = chalk.bold.red;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res){
  var indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

var server = http.createServer(app);

server.listen(PORT);

server.on('error', function(err){
	console.error(err);
});
server.on('listening', function(){
	console.log(`You\'re now listening to ${PORT}, smooth jazz`);
})


