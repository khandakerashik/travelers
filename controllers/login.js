var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('login/index');
});

router.post('/', function(request, response){
	
	var user = {
		inputEmail: request.body.inputEmail,
		inputPassword: request.body.inputPassword
	};

	userModel.validate(user, function(status){
		if(status){
			//response.cookie('user', request.body.inputEmail);
            //response.session.useremail=request.body.inputEmail;
            
            userModel.getByemail(request.body.inputEmail, function(result){
                
            request.session.user_login="true";
            request.session.data =result;
            response.redirect('/home'); 
            });  
			
		}else{
			response.send('invalid username/password');		
		}
	});

});

module.exports = router;


