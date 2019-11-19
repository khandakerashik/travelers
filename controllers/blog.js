var express = require('express');
var userModel = require('./../models/user-model');
var blogModel = require('./../models/blog-model');
var router = express.Router();





router.get('/', function(request, response){
   // console.log(request.session.data.email);
    
    
    
    
     if(request.session.user_login ==null)
        {
            
            
      var user ={
      
      login:" "
        
    };
    
    
     blogModel.blogCount(function(count){
         
        blogModel.getAllblog(function(results){
		    response.render('blog/index',{blog: results,user:user,count:count});  
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
    
    
     blogModel.blogCount(function(count){
         
        blogModel.getAllblog(function(results){
		response.render('blog/index',{blog: results,user:user,count:count});  
        //console.log(count);
	});  
		
        
	});
    
    }
    
	
});

    
	


router.get('/blog_details/:id', function(request, response){
    
    
   
    if(request.session.user_login ==null)
        {
            
            
      var user ={
      
      login:" "
        
      };
            
            
            
           blogModel.getAllblogByID(request.params.id,function(results){
            
                    blogModel.getAllComment(request.params.id,function(comment){   
        
                            blogModel.blogComment(request.params.id,function(count){
                                        
                              
                                   response.render('blog/blog_details_common',{blog: results,user:user,comment:comment,count:count}); 
                                  
                              });
                    
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
    
    
        blogModel.getAllblogByID(request.params.id,function(results){
            
                    blogModel.getAllComment(request.params.id,function(comment){   
        
                            blogModel.blogComment(request.params.id,function(count){
                                        
                              
                                   response.render('blog/blog_details',{blog: results,user:user,comment:comment,count:count}); 
                                  
                              });
                    
                        });
          
                    });
         
    }
    
	
});




router.post('/comment/:id', function(request, response){
    
    
//    var id =request.params.id;
//    response.redirect('/blog/blog_details/id');
  blogModel.getAllblogByID(request.params.id,function(results){
    console.log(results.postby);
      
    var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
      
    };
      
     var today=new Date();
    
    
    
    var comment =
        {
            text:request.body.comment,
            postby:request.session.data.email,
            name:request.session.data.name,
            date:today,
            postid:request.params.id,
            blogpostemail:results.postby 
        };
    
    
    
    
    blogModel.insertComment(comment, function(status){	
		if(status)
		{
            
    
        
          response.redirect('/blog/blog_details/'+request.params.id);  
            
        }
        
        else
        {
         
         response.redirect('/blog/blog_details/'+request.params.id);    
      
        }
        
    });
    
    });
    
    
    
       
    
    
   
});














module.exports = router;


