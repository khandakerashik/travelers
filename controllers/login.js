var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('login/index');
});

router.post('/', function(request, response){
	console.log(request.body.inputEmail);
	var user = {
		inputEmail: request.body.inputEmail,
		inputPassword: request.body.inputPassword
	};

	userModel.validate(user, function(status){
		if(status){
			response.cookie('inputEmail', request.body.username);
			response.redirect('/home');
		}else{
			response.send('invalid username/password');		
		}
	});

});

module.exports = router;


