var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();

router.get('/', function(request, response){
	response.render('register/index');
});

router.post('/', function(request, response){

var user = {
		fullname: request.body.fullname,
		username: request.body.username,
		password: request.body.password,
		mobile:  request.body.mobile,
		gender:request.body.gender,
		usertype:request.body.usertype
	};


	userModel.insert(user, function(status){	
		if(status){
			response.redirect("/user/login");
		}else{
			response.redirect("register/index'");	
		}
	});
});





module.exports = router;



