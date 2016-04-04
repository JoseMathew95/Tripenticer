var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Express' });
});

router.get('/TourismPropertyBrokers', function(req, res, next) {
  res.render('TourismPropertyBrokers', { title: 'Express' });
});

router.get('/ManpowerImprovement', function(req, res, next) {
  res.render('ManpowerImprovement', { title: 'Express' });
});

router.get('/PropertyManagement', function(req, res, next) {
  res.render('PropertyManagement', { title: 'Express' });
});

router.get('/TourismConsultancy', function(req, res, next) {
  res.render('TourismConsultancy', { title: 'Express' });
});

router.get('/LitigationSupport', function(req, res, next) {
  res.render('LitigationSupport', { title: 'Express' });
});




module.exports = router;
