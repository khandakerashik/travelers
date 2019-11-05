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
          //console.log(request.session.data.email);
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
      agencyname:request.session.data.agency_name,
      place:request.body.inputPlace,
      date:request.body.inputDate,
      duration:request.body.inputDuration,
      description:request.body.inputDescription,
      person:request.body.inputPerson,
      cost:request.body.inputCost,
      image:"/abc/images/portfolio_01.jpg",
      catagory:"event",
      status:"0"
    };
    
    eventModel.insertEvents(event, function(status){  
      if(status){
        eventModel.getAllevents(function(results){
          response.render('travel_agency/index',{event:results,user:user});   
        });  
      }
      else{
        response.redirect("/travel_agency/offer_events");  
      }
    });
});



router.get('/edit_events', function(request, response){
    //console.log(request.cookies['user']);
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
      
      userModel.getAllEvents(function(results){
        response.render('travel_agency/edit_events', {user:user, data: results});		
      });
});

router.get('/edit', function(request, response){
    //console.log(request.cookies['user']);
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };

	response.render('travel_agency/edit',{user:user});
});

router.get('/delete_events', function(request, response){
    //console.log(request.cookies['user']);
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };

	response.render('travel_agency/delete_events',{user:user});
});

router.get('/history', function(request, response){
    //console.log(request.cookies['user']);
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };

	response.render('travel_agency/history',{user:user});
});

router.get('/messages', function(request, response){
    //console.log(request.cookies['user']);
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };

	response.render('travel_agency/messages',{user:user});
});

router.get('/notifications', function(request, response){
    //console.log(request.cookies['user']);
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };

	response.render('travel_agency/notifications',{user:user});
});

module.exports = router;
