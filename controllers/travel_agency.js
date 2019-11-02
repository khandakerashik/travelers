var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();


// router.get('*', function(request, response, next){

// 	if(request.cookies['user'] != null){
// 		next();
// 	}else{
// 		response.redirect('/logout');
// 	}

// });
router.get('/', function(request, response){
    //console.log(request.cookies['user']);

	response.render('travel_agency/index');
});

router.get('/edit_profile', function(request, response){
    //console.log(request.cookies['user']);

	response.render('travel_agency/edit_profile');
});

router.get('/offer_events', function(request, response){
    //console.log(request.cookies['user']);

	response.render('travel_agency/offer_events');
});

router.get('/edit_events', function(request, response){
    //console.log(request.cookies['user']);

	response.render('travel_agency/edit_events');
});
router.get('/edit', function(request, response){
    //console.log(request.cookies['user']);

	response.render('travel_agency/edit');
});

router.get('/delete_events', function(request, response){
    //console.log(request.cookies['user']);

	response.render('travel_agency/delete_events');
});

router.get('/history', function(request, response){
    //console.log(request.cookies['user']);

	response.render('travel_agency/history');
});

router.get('/messages', function(request, response){
    //console.log(request.cookies['user']);

	response.render('travel_agency/messages');
});

router.get('/notifications', function(request, response){
    //console.log(request.cookies['user']);

	response.render('travel_agency/notifications');
});

module.exports = router;


