var express = require('express');
var userModel = require('./../models/user-model');
var blogModel = require('./../models/blog-model');
var EventModel = require('./../models/events-model');
var router = express.Router();

 router.get('*', function(request, response, next){

	if(request.session.user_login!= null){
 		next();
 	}else{
		response.redirect('/logout');
 	}

 });


router.get('/', function(request, response){
    //console.log(request.cookies['user']);

    var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };
    userModel.getByemailFreaks(request.session.data.email, function(result){
        
            
              
    
            response.render('freaks/index',{data:result,user:user});
            });  
	
});

router.get('/edit_profile', function(request, response){
    //console.log(request.cookies['user']);
    
     var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };
    userModel.getByemailFreaks(request.session.data.email, function(result){
    
            response.render('freaks/edit_profile',{data:result,user:user});
            });  
    
    
    
	
});

router.get('/write_blog', function(request, response){
    //console.log(request.cookies['user']);
    var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };
	response.render('freaks/write_blog',{user:user});
});

router.get('/edit_blog', function(request, response){
    //console.log(request.cookies['user']);

     var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    
        //console.log(request.session.data.email);
        blogModel.getAllblogByEmail(request.session.data.email,function(results){
		response.render('freaks/edit_blog',{blog:results,user:user});  
        
	   });
    
    
    
});

router.get('/delete/:id', function(request, response){
    //console.log(request.cookies['user']);
    
    blogModel.delete(request.params.id, function(status){	
		if(status)
		{
           
            response.redirect('../edit_blog');
        }
        else
            {
                response.redirect('../edit_blog');
            }
    
    });
	
});

router.get('/pin_post', function(request, response){
    //console.log(request.cookies['user']);
    var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };

	response.render('freaks/pin_post',{user:user});
});

router.get('/book_events', function(request, response){

    var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };
    
    
    
            EventModel.AllBookingByemail(request.session.data.email, function(booking){
                
                   EventModel.getAlleventsByID(booking[0].eventid,function(results){
        
                       
                      response.render('freaks/book_events',{user:user,data:results}); 
                  
                   });
            
            });
    

	     
});



router.get('/edit/:id', function(request, response){
   
    
     var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };
     blogModel.getAllblogByID(request.params.id, function(result){
    
            response.render('freaks/edit',{blog:result,user:user});
            }); 
    

	     
});

router.get('/history', function(request, response){
     var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };
    
    
    
    blogModel.getAllHistoryOfComment(request.session.data.email, function(result){
            
           EventModel.AllBookingByemail(request.session.data.email, function(booking){
               
                 EventModel.getAllNotificationByEmail(request.session.data.email, function(notification){
               
                  response.render('freaks/history',{user:user,data:result,booking:booking,notification:notification});
                     
                 });
    
           });
    });
});

router.get('/messages', function(request, response){
    
    
    var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };

       userModel.getAll(request.session.data.email,function(result){
           EventModel.getMessage(request.session.data.email,function(data){
           
        
          response.render('freaks/messages',{user:user,freaks:result,data:data}); 
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
    
     
      EventModel.insertMessage(message, function(status){
          
         
		
		if(status)
            {

            
              response.redirect('../freaks/messages');    

            }
        
        else
        
            {
                
              response.redirect('../freaks/messages');
            
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
    
    
    
    blogModel.getAllCommentByEmail(request.session.data.email, function(result){
    
            console.log(result);
            response.render('freaks/notifications',{user:user,data:result});
    });
});




router.post('/edit_profile', function(request, response){
    //console.log(request.cookies['user']);
    
     var update ={
                name: request.body.inputName,
                phone: request.body.inputPhone,
                gender:  request.body.inputGender,
                password:request.body.inputPassword,
                profile_pic:"/abc",
                email:request.session.data.email

              };
    
    
    var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };
    
    
    
    
    
    userModel.updateFreaks(update, function(status){
		
		if(status)
        {
            
            userModel.update(update, function(status){
                
            if(status)
            {
            
                
                
            userModel.getByemailFreaks(request.session.data.email, function(result){

              var user ={
              name:result.name,
              email:result.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };
                
                request.session.data=result;
                response.render('freaks/index',{data:result,user:user});
                }); 
                
            }
            
                
		  });
    
        }
        
        else
        
        {
             userModel.getByemailFreaks(request.session.data.email, function(result){
            
    
            response.render('freaks/edit_profile',{data:result,user:user});
            });  
			
		}
	 
    
    
    });
	
        
  



});




router.post('/write_blog', function(request, response){
    
    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    
    var today=new Date();
    
    
    var blog =
    {
        
     title:request.body.inputTittle,
     location:request.body.inputLocation,
     description:request.body.inputDescription,
     image:"/abc/images/portfolio_01.jpg",
     postby:request.session.data.email,
     name:request.session.data.name,
     catagory:"blog",
     date:today
        
    };
    
    blogModel.insertBlog(blog, function(status){	
		if(status)
		{  
  
         response.redirect('../../blog');   
            
            
        }
        
        else
        {
        
           response.redirect('/freaks/write_blog');
            
        }
    
    });
    
	
});




router.post('/edit/:id', function(request, response){
    //console.log(request.cookies['user']);

    
       var blog =
        {
        
         title:request.body.inputTittle,
         location:request.body.inputLocation,
         description:request.body.inputDescription,
         image:"/abc/images/portfolio_01.jpg",
         postby:request.session.data.email,
         name:request.session.data.name,
         catagory:"blog",
         id:request.params.id
        
        };
    
    
     
   blogModel.updateBlog(blog, function(status){
         
         
		
		if(status)
            {

             response.redirect('../../blog');   
                

            }

        else
            {

                
              

            }


    
  });



});






module.exports = router;


