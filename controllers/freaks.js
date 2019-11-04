var express = require('express');
var userModel = require('./../models/user-model');
var blogModel = require('./../models/blog-model');
var router = express.Router();

// router.get('*', function(request, response, next){

// 	if(request.cookies['user'] != null){
// 		next();
// 	}else{
// 		response.redirect('/logout');
// 	}

// });
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

router.get('/delete_blog', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/delete_blog');
});

router.get('/pin_post', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/pin_post');
});

router.get('/book_events', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/book_events');
});

router.get('/edit/:id', function(request, response){
    //console.log(request.cookies['user']);
    
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
    //console.log(request.cookies['user']);

	response.render('freaks/history');
});

router.get('/messages', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/messages');
});

router.get('/notifications', function(request, response){
    //console.log(request.cookies['user']);

	response.render('freaks/notifications');
});




router.post('/edit_profile', function(request, response){
    //console.log(request.cookies['user']);
    
     var update ={
                name: request.body.inputName,
                phone: request.body.inputPhone,
                gender:  request.body.inputGender,
                password:request.body.inputPassword,
                profile_pic:"/abc"

              };
    
    console.log(request.body.inputname);
    var user ={
              name:request.session.data.name,
              email:request.session.data.email,
              user_type:request.session.data.user_type,
              login:request.session.user_login

              };
    
    
    
    
    
    userModel.updateFreaks(update, function(status){
		
		if(status)
        {
        
            
            userModel.getByemailFreaks(request.session.data.email, function(result){
              
    
            response.render('freaks/index',{data:result,user:user});
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
            
          var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    
    
        blogModel.blogCount(function(count){
         
        blogModel.getAllblog(function(results){
		response.render('blog/index',{blog: results,user:user,count:count});  
        //console.log(count);
	});  
		
        
	});  
            
            
        }
        
        else
        {
        
           response.redirect('/freaks/write_blog');
            
        }
    
    });
    
	
});



module.exports = router;


