var express = require('express');
var userModel = require('./../models/user-model');
var blogModel = require('./../models/blog-model');
var EventModel = require('./../models/events-model');
var router = express.Router();



router.get('/', function(request, response){
   
     
    if(request.session.user_login ==null)
    {
       
        
        var user ={
        
         login:" "
        
         };
        
            blogModel.getAllblogHome(function(result){
            EventModel.getAlleventsHome(function(e){
            response.render('home/index',{blog:result,events:e,user:user});
        
        
            });
        });   
        
        
    }
       
    else
        {
           
               
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
        }

        

});



router.get('/Profile', function(request, response){



if(request.session.user_login ==null)
    {

        
        var user ={
        
         login:" "
        
         };
        
            blogModel.getAllblogHome(function(result){
            EventModel.getAlleventsHome(function(e){
            response.render('home/index',{blog:result,events:e,user:user});
        
        
            });
        });   
        
        
    }
       
    else
        {
           
               
              var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login
                
              };
            
          if(request.session.data.user_type=="freaks")
            {
              response.redirect('/freaks');

            }

          else if (request.session.data.user_type=="agencies") 
              {

                response.redirect('/travel_agency');

              }
        else if (request.session.data.user_type=="admin") 
              {

                response.redirect('/admin');

              }
  
        

        }






 });


module.exports = router;


