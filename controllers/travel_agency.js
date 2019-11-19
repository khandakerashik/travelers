var express = require('express');
var userModel = require('./../models/user-model');
var eventModel = require('./../models/events-model');
var router = express.Router();



router.get('/', function(request, response){

    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login      
      };
      
      userModel.getAgencyByEmail(request.session.data.email, function(result){

        response.render('travel_agency/index',{user:user,data:result});
          
      });   
});

router.get('/edit_profile', function(request, response){

    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
      };

    userModel.getAgencyByEmail(request.session.data.email, function(result){
      response.render('travel_agency/edit_profile',{user:user,data:result});
    });

});


router.post('/edit_profile', function(request, response){

    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
    };
    
     var update ={
      name: request.body.inputName,
      phone: request.body.inputPhone,
      gender:  request.body.inputGender,
      password:request.body.inputPassword,
      profile_pic:"/abc",
      email:request.session.data.email
    };
    
    
    userModel.updateAgencies(update, function(status){
    
      if(status){

        userModel.updateUsers(update, function(status){

          if(status){

            userModel.getByemailAgencies(request.session.data.email, function(result){

              var user ={
                name:result.name,
                email:result.email,
                user_type:request.session.data.user_type,
                login:request.session.user_login
              };
              request.session.data=result;
              response.render('travel_agency/index',{data:result,user:user});

            });     
          }        
        });
      }
      else{

        userModel.getByemailAgencies(request.session.data.email, function(result){

          response.render('travel_agency/edit_profile',{data:result,user:user});

        });  
      
      }
    });

});

router.get('/offer_events', function(request, response){

    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login 
      };

    response.render('travel_agency/offer_events',{user:user});

});

router.post('/offer_events', function(request, response){
    
    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login  
    };
    
    var event ={
      tittle:request.body.inputTittle,
      postby:request.session.data.email,
      agencyname:request.body.inputAgency,
      place:request.body.inputPlace,
      date:request.body.inputDate,
      duration:request.body.inputDuration,
      description:request.body.inputDescription,
      person:request.body.inputPerson,
      cost:request.body.inputCost,
      image:"/abc/images/portfolio_01.jpg",
      catagory:"event",
      status:"1"
    };
    
    eventModel.insertEvents(event, function(status){  

      if(status){

        response.redirect("/travel_agency/"); 

      }
      else{

        response.redirect("/travel_agency/offer_events");

      }
    });

});

router.get('/edit_events', function(request, response){

    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login      
    };
      
    eventModel.getAlleventByEmailstatus(request.session.data.email,function(results){

      response.render('travel_agency/edit_events',{event:results,user:user});

    });

});

router.get('/edit/:id', function(request, response){

    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
    };

    eventModel.getAlleventsByID(request.params.id, function(result){

      response.render('travel_agency/edit',{event:result,user:user});

    }); 

});

router.post('/edit/:id', function(request, response){

    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
    };

    var event ={
      tittle:request.body.inputTittle,
      postby:request.session.data.email,
      agencyname:request.body.inputAgency,
      place:request.body.inputPlace,
      date:request.body.inputDate,
      duration:request.body.inputDuration,
      description:request.body.inputDescription,
      person:request.body.inputPerson,
      cost:request.body.inputCost,
      image:"/abc/images/portfolio_01.jpg",
      catagory:"event",
      status:"1",
      id:request.params.id
    };
    
    eventModel.updateEvents(event, function(status){  

      if(status){

        response.redirect("/travel_agency/edit_events");

      }
      else{
      }
    });

});

router.get('/delete_events', function(request, response){
    
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login     
      };
      
    eventModel.getAlleventByEmailstatus(request.session.data.email,function(results){

      response.render('travel_agency/delete_events',{event:results,user:user});

    });

});


router.get('/delete/:id', function(request, response){
    
    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
    };

    eventModel.getAlleventsByID(request.params.id, function(result){

      response.render('travel_agency/delete',{event:result,user:user});

    }); 

});

router.get('/delete/:id', function(request, response){

	var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login      
    };


  var update ={
      status:"0",
      id:request.params.id
    };
    
    eventModel.deleteEvents(update, function(status){

      if(status){

        response.redirect("/travel_agency/delete_events");

      }
      else{

        response.redirect("/travel_agency/delete/"+request.params);

      }
    });

});

router.post('/delete/:id', function(request, response){

	var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login      
    };


  	var update ={
      status:"0",
      id:request.params.id
    };

    var event ={
      tittle:request.body.inputTittle,
      postby:request.session.data.email,
      agencyname:request.body.inputAgency,
      place:request.body.inputPlace,
      date:request.body.inputDate,
      duration:request.body.inputDuration,
      description:request.body.inputDescription,
      person:request.body.inputPerson,
      cost:request.body.inputCost,
      image:"/abc/images/portfolio_01.jpg",
      catagory:"event",
      status:"0",
      id:request.params.id
    };
    
    eventModel.deleteEvents(update, function(status){

		if(status){

    		eventModel.insertdeclinedEvents(event, function(status){

      			if(status){

        			response.redirect("/travel_agency/delete_events");
        		}
        		else{

        			response.redirect("/travel_agency/delete");

      			}

      		});	
      	}
    		
    	
	});
});

router.get('/history', function(request, response){

    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login      
    };

      
   	eventModel.getAlleventByEmailzerostatus(request.session.data.email,function(results){
		 eventModel.getAlleventByEmailstatus(request.session.data.email,function(result){
      		response.render('travel_agency/history',{data:results,event:result,user:user}); 

    });
});

});

router.get('/booking', function(request, response){
    
    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
    };

    eventModel.getAllBookedevents(request.session.data.email, function(result){

      response.render('travel_agency/booking',{event:result,user:user});

    }); 

});


router.get('/messages', function(request, response){
    //console.log(request.cookies['user']);
    var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };

       userModel.getAll(request.session.data.email,function(result){
           eventModel.getMessage(request.session.data.email,function(data){
           
        
          response.render('travel_agency/messages',{user:user,freaks:result,data:data}); 
           });
    });
    

});




router.post('/messages', function(request, response){
    
    
    var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };
     
    var today=new Date();
    var message =
        {
            sender:request.session.data.email,
            reciver:request.body.rmail,
            text:request.body.reciver,
            date:today,
            sendername:request.session.data.name
         }
    
     
      eventModel.insertMessage(message, function(status){
          
    if(status)
            {

              response.redirect('../travel_agency/messages');    

            }
        
        else
        
            {
                
              response.redirect('../travel_agency/messages');
            
            }  
  
  });


});

router.get('/notifications', function(request, response){

    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login      
    };
      
    eventModel.getAlleventByEmailzerostatus(request.session.data.email,function(results){
		eventModel.getAlleventByEmailstatus(request.session.data.email,function(result){
      		response.render('travel_agency/notifications',{data:results,event:result,user:user}); 

    	});
	});
});




module.exports = router;
