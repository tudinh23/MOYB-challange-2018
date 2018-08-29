var debug = require('debug')('node-js-getting-started:server');
var express = require('express')
var path = require('path')
var http = require('http');
var logger = require('morgan');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var market = require('./routes/market');
var listing = require('./routes/listing');
var myAccount = require('./routes/myAccount');
var addAsset = require('./routes/addAsset');
var createListing = require('./routes/createListing');
var login = require('./routes/login');
var seller = require('./routes/seller');
var seller2 = require('./routes/seller2');
var myListing = require('./routes/myListing');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', index);
app.use('/listing', listing);
app.use('/myAccount', myAccount);
app.use('/market', market);
app.use('/addAsset', addAsset);
app.use('/createListing', createListing);
app.use('/login', login);
app.use('/seller', seller);
app.use('/seller2', seller2);
app.use('/myListing', myListing);


app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});

module.exports = app;