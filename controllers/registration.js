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
		gender:  request.body.inputGender,
		password:request.body.inputPassword,
		profile_pic:"/abc",
		status:"1",
		type:"freaks"
	};
	
     request.checkBody('inputEmail','*Enter a valid email').isEmail().normalizeEmail();
     request.checkBody('inputPassword', '*Password must be between 5-60 characters long.').len(5, 60);
     
     const err=request.validationErrors();
    
    if(err){
        //console.log(err.msg);
       // response.send('success');
        response.render('registration/freaks',{errors:err,user:user});
    }else{
        userModel.insertFreaks(user, function(status){	
		if(status)
		{
				userModel.insert(user, function(status){	
 			if(status){
			 	response.redirect("/login");
			}else{
 				response.redirect("/registration/freaks");	
			     }
 		   });

		}
	});
        
    }	

	

});








router.post('/agencies', function(request, response){
	


	var user = {
		name: request.body.inputName,
		email: request.body.inputEmail,
        agencies:request.body.inputAgencyname,
		phone: request.body.inputPhone,
		gender:  request.body.inputGender,
		password:request.body.inputPassword,
		profile_pic:"/abc",
		status:"1",
		type:"agencies"
	};
	
     //request.checkBody('inputEmail','*Enter a valid email').isEmail().normalizeEmail();
     //request.checkBody('inputPassword', '*Password must be between 5-60 characters long.').len(5, 60);
     
     const err=request.validationErrors();
    
    if(err){
        //console.log(err.msg);
       // response.send('success');
        response.render('registration/agencies',{errors:err,user:user});
    }else{
        userModel.insertTravel_agencies(user, function(status){	
		if(status)
		{
				userModel.insert(user, function(status){	
 			if(status){
			 	response.redirect("/login");
			}else{
 				response.redirect("/registration/agencies");	
			     }
 		   });

		}
	});
        
    }	

	

});





module.exports = router;


