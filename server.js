'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var sockets = require(path.resolve('app/sockets'));
var bodyParser = require('body-parser');
var form = require(path.resolve('app/form'));

//Use Handlebars
app.set('view engine', 'hbs');

//Serve Assets
app.use(express.static(path.join(path.normalize(__dirname + '/public'))));

app.get('/*', function(req, res) {
  res.render(__dirname + '/public/index.hbs', {thing:'yeah yeah yeah'});
});



app.use(bodyParser.urlencoded({extended: false}));
app.use('/printer', form.router);

sockets.init(http);

var server = http.listen(1985, function () {
  console.log('Printatron listening on 1985');
});