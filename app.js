var express = require('express'),
<<<<<<< HEAD
    app = express(),
    exphbs  = require('express-handlebars'),
    bodyParser = require('body-parser'),
    mongojs = require('mongojs'),
    router = require('express').Router(),
    https = require('https'),
    http = require('http'),
    db = require('./config/database'),
    Course = require('./models/major.js');
=======
 app = express(),
 exphbs  = require('express-handlebars'),
 bodyParser = require('body-parser'),mongojs = require('mongojs');

var https = require('https');
var http = require('http');

var db = require('./config/database'); // get our db file

app.use('/api', require('./app/modules/form/api.js'))

>>>>>>> 3f0a451412d109ae8a9d30efe2fa6f1c0ae3ffcd

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

app.get('/api/post', function (req, res) {
  console.log("LISTENING TO POST");
})

app.post('/api/post', function (req, res) {
  console.log("Waiting for get Request");
})
// app.listen(port);

http.createServer(app).listen(port);
// https.createServer(app).listen(port);

console.log("Server listening on port:", port);


