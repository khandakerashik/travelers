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

	response.render('freaks/index');
});

router.get('/edit_profile', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/edit_profile');
});

router.get('/write_blog', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/write_blog');
});

router.get('/edit_blog', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/edit_blog');
});

router.get('/delete_blog', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/delete_blog');
});

router.get('/pin_post', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/pin_post');
});

router.get('/book_events', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/book_events');
});

router.get('/edit', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/edit');
});

router.get('/history', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/history');
});

router.get('/messages', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/messages');
});

router.get('/notifications', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/notifications');
});



module.exports = router;


