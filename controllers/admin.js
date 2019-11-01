var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('admin/index');
});
router.get('/index', function(request, response){
	response.render('admin/index');
});
router.get('/404', function(request, response){
    response.render('admin/404');
});
router.get('/blank', function(request, response){
    response.render('admin/blank');
});
router.get('/buttons', function(request, response){
    response.render('admin/buttons');
});
router.get('/charts', function(request, response){
    response.render('admin/charts');
});
router.get('/grids', function(request, response){
    response.render('admin/grids');
});
router.get('/icons', function(request, response){
    response.render('admin/icons');
});
router.get('/inboxdetails', function(request, response){
    response.render('admin/inbox-details');
});
router.get('/inbox', function(request, response){
    response.render('admin/inbox');
});

router.get('/maps', function(request, response){
    response.render('admin/maps');
});
router.get('/portlet', function(request, response){
    response.render('admin/portlet');
});
router.get('/price', function(request, response){
    response.render('admin/price');
});
router.get('/product', function(request, response){
    response.render('admin/product');
});
router.get('/typography', function(request, response){
    response.render('admin/typography');
});
router.get('/signup', function(request, response){
    response.render('admin/signup');
});

router.get('/login', function(request, response){
    response.render('admin/login');
});
module.exports = router;


