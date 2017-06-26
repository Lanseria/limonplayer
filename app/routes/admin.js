var app = require('express');
var router = app.Router();

/* GET home page. */
router.use(function(req, res, next){
  var _user = req.session.user;
  res.locals.user = _user;
  next();
})

router.get('/', function(req, res){
  res.render('admin/index', {
    
  })
})


module.exports = router;