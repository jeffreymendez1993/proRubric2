var express = require('express'),
 app = express(),
 exphbs  = require('express-handlebars'),
<<<<<<< HEAD
 bodyParser = require('body-parser'),mongojs = require('mongojs');

var https = require('https');
var http = require('http');
=======
 bodyParser = require('body-parser'),util = require('util'),mongoose = require('mongoose'), morgan = require('morgan');
>>>>>>> b145e39649551cb95b327df6b747c72536956631

var db = require('./config/database'); // get our db file

app.use('/api', require('./app/modules/form/api.js'))


//view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/config'));

//config port
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.render('landing');
})


<<<<<<< HEAD
// app.listen(port);

http.createServer(app).listen(port);
// https.createServer(app).listen(port);

=======

app.get('/api/post', function (req, res) {
	console.log("LISTENING TO POST");
	res.render('./form');
})

app.post('/api/post', function (req, res) {
	console.log("Waiting for get Request");
})

app.listen(port);
>>>>>>> b145e39649551cb95b327df6b747c72536956631
console.log("Server listening on port:", port);


