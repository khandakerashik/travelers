var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('registration/index');
});
router.get('/freaks', function(request, response){
    response.render('registration/freaks');
});
router.get('/agencies', function(request, response){
    response.render('registration/agencies');
});

router.post('/freaks', function(request, response){
	


	var user = {
		name: request.body.inputName,
		email: request.body.inputEmail,
		phone: request.body.inputPhone,
		gender:  request.body.inputgender,
		password:request.body.inputPasswordr,
		profile_pic:"/abc"
	};
	console.log(user.profile_pic);

	userModel.insertFreaks(user, function(status){	
		if(status){
			response.redirect("/login");
		}else{
			response.redirect("/registration/freaks");	
		}
	});

});

module.exports = router;


