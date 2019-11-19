var express = require('express');
var userModel = require('./../models/user-model');
var EventModel = require('./../models/events-model');
var router = express.Router();



router.get('/', function(request, response){
    
    
     
     if(request.session.user_login ==null)
        {
            
            
      var user ={
      
      login:" "
        
     };
     
            
       EventModel.EventsCount(function(count){
         
       EventModel.getAllevents(function(results){
       response.render('events/index',{events: results,user:user,count:count});  
        //console.log(count);
	  });  
	 	
        
	   });   
            
            
            
            
    
    
        }
    
    
    
    else{
        
        
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
        
        
    }
	
});





router.get('/event_details/:id', function(request, response){
    
    if(request.session.user_login ==null)
        {
            
            
      var user ={
      
      login:" "
        
      };
            
    
            
        EventModel.getAlleventsByID(request.params.id,function(results){
		response.render('events/event_details_common',{events: results,user:user});  
        
	   });    
            
            
            
        }
    
    
    
    else{
        
     var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    
      EventModel. getAlleventsByID(request.params.id,function(results){
		response.render('events/event_details',{events: results,user:user});  
        
	   });
    
    }
	
});








router.get('/book_now/:id', function(request, response){
    
    
    if(request.session.user_login!= null)
 	{
		
          var user ={
          name:request.session.data.name,
          email:request.session.data.email,
          user_type:request.session.data.user_type,
          login:request.session.user_login

          };


    
    

           EventModel.getAlleventsByID(request.params.id,function(results){
                 response.render('events/book_now',{events: results,user:user});  

           });    

         
        
        
 	}
    
    else
    {
       response.redirect('/home'); 
        
    }
    
    
     
        
	   
    
    
	
});





router.post('/book_now/:id', function(request, response){
    
    
    
     var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    
    
    
    EventModel.getAlleventsByID(request.params.id,function(results){


		
         var capacity=results.person_capacity - request.body.inputPerson;
          
          var today=new Date();
                var booking ={
                    
                     eventid:request.params.id,
                     eventtitle:results.title,
                     agencyname:results.agencyname,
                     angencies_email:results.postby,
                     bookedby:request.session.data.email,
                     bookedby_name:request.session.data.name,
                     date:today,
                     booking_count: request.body.inputPerson
                   };
        
             EventModel.insertBooking(booking,function(st){
                 
                 if(st)
                 
                 {
                     var cap={
                      capacity:capacity,  
                      id:request.params.id  
                     };
                     
                     EventModel.update(cap,function(status){
                       
                         if(status){
                            response.redirect('/freaks/book_events'); 
                             
                         }
                         
                         
                     });
                     
                 }
                 
                 else
                 
                 
                 {
                    EventModel.getAlleventsByID(request.params.id,function(results){
                    response.render('events/book_now',{events: results,user:user});  

                   });   
                     
                 }
                 
                 
                 
             });
    
    
     }); 
    
    
    
      
	   
    
    
	
});


router.get('/report/:id', function(request, response){
        
    console.log(request.session.data.email);
        var today=new Date();
        var notification ={
         text:"report to admin",
         eventid:request.params.id,
         postby:request.session.data.email,
         date:today
            
        };
    
        
		EventModel.insertIntoNotification(notification,function(st){
            if(st){
    
         response.redirect('../event_details/'+request.params.id);
            }
            
            else{
                
              response.redirect('../event_details/'+request.params.id);  
            }
        });
    
});







module.exports = router;


