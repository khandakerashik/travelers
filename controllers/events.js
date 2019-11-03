var express = require('express');
var userModel = require('./../models/user-model');
var EventModel = require('./../models/events-model');
var router = express.Router();



router.get('/', function(request, response){
    
     var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    
     EventModel.EventsCount(function(count){
         
       EventModel.getAllevents(function(results){
       response.render('events/index',{events: results,user:user,count:count});  
        //console.log(count);
	});  
		
        
	});

	
});




router.get('/event_details/:id', function(request, response){
    
     var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    
      EventModel. getAlleventsByID(request.params.id,function(results){
		response.render('events/event_details',{events: results,user:user});  
        
	   });
    
    
	
});


module.exports = router;


