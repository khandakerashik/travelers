var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();




router.get('*', function(request, response, next){

	if(request.cookies['username'] != null){
		next();
	}else{
		response.redirect('/logout');
	}

});

router.get('/adminpanel', function(request, response){
			response.render('/adminpanel');

	});



router.get('/userprofile', function(request, response){

		var username=request.cookies['username'];
		 

	    userModel.getByusername(username, function(result){
	    
	    if(result.usertype=="user"){response.render('user/userprofile', result);}
	    else
	    {
	    	response.render('user/adminprofile', result);
	    }

		


	});




router.get('/edit', function(request, response){
	var username=request.cookies['username'];
	userModel.getByusername(username, function(result){

		response.render('user/edit', result);
	});
	
});

router.post('/edit', function(request, response){

	var user = {
		username: request.body.username,
		password: request.body.password,
		id: request.params.id
	};

	userModel.update(user, function(status){
		
		if(status){
			response.redirect('/user/userlist');
		}else{
			response.redirect('/user/edit/'+request.params.id);
		}
	});
	
});



	
		
});








module.exports = router;



