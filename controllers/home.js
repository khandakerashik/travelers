var express = require('express');
var userModel = require('./../models/user-model');
var blogModel = require('./../models/blog-model');
var EventModel = require('./../models/events-model');
var router = express.Router();



router.get('/', function(request, response){
   // console.log(request.session.data.email);
    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    
    
    
     blogModel.getAllblogHome(function(result){
        EventModel.getAlleventsHome(function(e){
     
         
		  response.render('home/index',{blog:result,events:e ,user:user});
        //console.log(result);
         
         
         
	  });
         
		     
	});   
    
	
});



module.exports = router;


