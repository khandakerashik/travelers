var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('registration/index');
});

router.get('/freaks', function(request, response){
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
    
    response.render('registration/freaks',{user:user});
});

router.get('/agencies', function(request, response){
    
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
    
    
    
    response.render('registration/agencies',{user:user});
});

router.post('/freaks', function(request, response){
	
    var email;
    
	var user = {
		name: request.body.inputName,
		email: request.body.inputEmail,
		phone: request.body.inputPhone,
		gender:  request.body.inputGender,
		password:request.body.inputPassword,
        conPassword:request.body.inputConfirmPassword,
		profile_pic:"/abc",
		status:"1",
		type:"freaks"
	};
    
    
	 // Input validation
     
     
    
    userModel.alreadyHaveEmail(request.body.inputEmail, function(result){
    //console.log( result.email);
        
     //console.log(result.email+" inside");
     request.checkBody('inputEmail','*Email Already Taken').not().equals(result.email); 
     request.checkBody('inputPassword', '*Password must be between 6-60 characters long').len(6, 60);
     request.checkBody('inputPhone','*Enter a valid mobile no').isMobilePhone();
     request.checkBody('inputGender','*Select a gender').isIn('male','female');
     request.checkBody('inputPassword','*Both password not match').equals(request.body.inputConfirmPassword);
     //console.log(email+" lol");
     
     
     var err=request.validationErrors();
  
   
    if(err){
       
        response.render('./registration/freaks',{user:user,errors:err});
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
    
    // console.log(email);
     
   	

	

});




router.post('/agencies', function(request, response){
	


	var user = {
		name: request.body.inputName,
		email: request.body.inputEmail,
        agencies:request.body.inputAgencyname,
		phone: request.body.inputPhone,
		gender:  request.body.inputGender,
		password:request.body.inputPassword,
        conPassword:request.body.inputConfirmPassword,
		profile_pic:"/abc",
		status:"1",
		type:"agencies"
	};
	
     // Input validation
    
     userModel.alreadyHaveEmail(request.body.inputEmail, function(result){ 
         
         
     request.checkBody('inputEmail','*Email Already Taken').not().equals(result.email);
     request.checkBody('inputPassword', '*Password must be between 6-60 characters long').len(6, 60);
     request.checkBody('inputPhone','*Enter a valid mobile no').isMobilePhone();
     request.checkBody('inputGender','*Select a gender').isIn('male','female');
     request.checkBody('inputPassword','*Both password not match').equals(request.body.inputConfirmPassword);
      
     const err=request.validationErrors();
    
    if(err){
       
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

  });



module.exports = router;


