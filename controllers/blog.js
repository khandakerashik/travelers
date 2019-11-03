var express = require('express');
var userModel = require('./../models/user-model');
var blogModel = require('./../models/blog-model');
var router = express.Router();




router.get('/', function(request, response){
   // console.log(request.session.data.email);
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
    
      
    
	
});

    
	


router.get('/blog_details/:id', function(request, response){
    
    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    
    
        blogModel.getAllblogByID(request.params.id,function(results){
		response.render('blog/blog_details',{blog: results,user:user});  
        
	   });
    
	
});



module.exports = router;


