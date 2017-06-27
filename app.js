const fs = require('fs');
var http = require('http');
var path = require('path');
var https = require('https');
var logger = require('morgan');
var express = require('express');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var mongoStore = require('connect-mongo')(session);

var dbUrl = 'mongodb://localhost/index';
var config = require('./config');

var app = express();

mongoose.connect(dbUrl);

app.set('views', path.join(__dirname, './app/views/pages'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret:'imooc',
  resave: false,
  saveUninitialized: true,
  store:new mongoStore({
    url:dbUrl,
    collection: 'sessions'
  })
}));
var env = process.env.NODE_ENV || 'development';

if('development' === env){
  app.set('showStackError', true);
  app.use(logger(':method :url :status'));
  app.locals.pretty = true;
  mongoose.set('debug', true);
}
app.locals.moment = require('moment');
app.locals.web = config.font_end;

require('./app/routes/index')(app);
const options = {
  key: fs.readFileSync('/etc/nginx/server.key'),
  cert: fs.readFileSync('/etc/nginx/server.crt')
};
// http.createServer(app).listen(config.port,"www.limonplayer.cn");
https.createServer(options, app).listen(config.ports, "www.limonplayer.cn");

console.log('index started on http port '+config.port + ', https port ' +config.ports);