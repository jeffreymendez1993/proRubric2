var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
    var db = mongoose.connection;
     
    db.on('error', function (err) {
    console.log('connection error', err);
    });
    db.once('open', function () {
    console.log('connected to database.');
});
 