'use strict'
var admin = require('./admin');
var Index = require('../controllers/index');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

module.exports = function(app){
  
  // app.use(function(req, res, next){
  //   var _user = req.session.user;
  //   app.locals.user = _user;
  //   next();
  // })

  // admin router
  app.use('/admin', admin)


  // index page
  app.get('/', Index.index)
  app.get('/index', Index.index)

  // user login

  app.get('/login', function(req, res){
    res.send('login');
  })
}