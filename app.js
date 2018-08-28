var debug = require('debug')('node-js-getting-started:server');
var express = require('express')
var path = require('path')
var http = require('http');
var logger = require('morgan');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000

var index = require('./routes/index');
var market = require('./routes/market');
var listing = require('./routes/listing');
var myAssets = require('./routes/myAssets');
var addAsset = require('./routes/addAsset');
var createListing = require('./routes/createListing');
var login = require('./routes/login');


var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', PORT);
var server = http.createServer(app);

server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);


app.use('/', index);
app.use('/listing', listing);
app.use('/myAssets', myAssets);
app.use('/market', market);
app.use('/addAsset', addAsset);
app.use('/createListing', createListing);
app.use('/login', login);


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

module.exports = app;