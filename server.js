'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var sockets = require(path.resolve('app/sockets'));

app.use('/', express.static(__dirname + '/public'));

sockets.init(http);

var server = http.listen(1985, function () {

  console.log('Printatron listening on 1985');
});