var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();


router.get('/', function(request, response){
    var user={
    	name:request.session.data.name,
    	email:request.session.data.email,
    	user_type:request.session.data.user_type,
    	login:request.session.user_login
    }

	response.render('travel_agency/index',user);
});

router.get('/edit_profile', function(request, response){
    var user={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
    }
	response.render('travel_agency/edit_profile');
});

router.get('/offer_events', function(request, response){
    var user={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
    }

	response.render('travel_agency/offer_events');
});

router.get('/edit_events', function(request, response){
    var user={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
    }

	response.render('travel_agency/edit_events');
});
router.get('/edit', function(request, response){
    var user={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
    }

	response.render('travel_agency/edit');
});

router.get('/delete_events', function(request, response){
    var user={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
    }

	response.render('travel_agency/delete_events');
});

router.get('/history', function(request, response){
    var user={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
    }

	response.render('travel_agency/history');
});

router.get('/messages', function(request, response){
    var user={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
    }

	response.render('travel_agency/messages');
});

router.get('/notifications', function(request, response){
    var user={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
    }

	response.render('travel_agency/notifications');
});

module.exports = router;


