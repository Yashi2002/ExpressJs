var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yasmini' });
});
router.get('/home',function(req,res,next){
  res.render('home',{
    fname : 'Yasmini',
    lname : 'Gyawali',
    age : 20,
    study : 'Bachelors',
    title : 'Software Engineer'
  })
}
)
module.exports = router;
