var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
      userModel.totaluser(function(result){
        //console.log(request.session.data.email);
        response.render('admin/index',{user:user,result});
        //console.log(data.id);
        
      });
});

router.get('/index', function(request, response){
  var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    userModel.totaluser(function(result){
      //console.log(request.session.data.email);
      response.render('admin/index',{user:user,result});
      //console.log(data.id);
      
    });
});


router.get('/profile', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
      
        userModel.getAdminByEmail(request.session.data.email, function(result){
          //console.log(request.session.data.email);
          response.render('admin/profile',{user:user,data:result});
          
        });
         
});


router.get('/editprofile', function(request, response){
  var user ={
    name:request.session.data.name,
    email:request.session.data.email,
    user_type:request.session.data.user_type,
    login:request.session.user_login
      
  };
  
    userModel.getAdminByEmail(request.session.data.email, function(result){
      response.render('admin/edit_profile',{user:user,data:result});
      
    });
});

router.post('/editprofile', function(request, response){
  var add = {
    name: request.body.inputName,
    email: request.body.inputEmail,
    phone: request.body.inputPhone,
    gender: "male",
    password:request.body.inputPassword,
    profile_pic:"/abc/",
  };
  var user = {
    name: request.body.inputName,
    email: request.body.inputEmail,
    password:request.body.inputPassword,
  };

  userModel.updateAdminByEmail(add,request.session.data.email, function(status){	
    if(status)
    {
        userModel.updateByEmail(user,request.session.data.email, function(status){	
       if(status){
         console.log("update successful");
         response.redirect("/admin/edit_profile");
      }else{
        console.log("Update Failed!");
         response.redirect("/admin/addadmin");	
           }
        });

    }
  });

});

router.get('/addadmin', function(request, response){
  var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    response.render('admin/addadmin',{user:user});
});


router.post('/addadmin', function(request, response){
      var add = {
        name: request.body.inputName,
        email: request.body.inputEmail,
        phone: request.body.inputPhone,
        gender:  request.body.inputGender,
        password:request.body.inputPassword,
        profile_pic:"/abc/",
      };
      var user = {
        name: request.body.inputName,
        email: request.body.inputEmail,
        password:request.body.inputPassword,
        type:"Admin",
        status:"1",
      };

      userModel.insertAdmins(add, function(status){	
        if(status)
        {
            userModel.insert(user, function(status){	
           if(status){
             console.log("insert successful");
             response.redirect("/admin/addadmin");
          }else{
            console.log("insert Failed!");
             response.redirect("/admin/addadmin");	
               }
            });
    
        }
      });
  
});
router.get('/freaks', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
      userModel.getAllFreaks(function(results){
        response.render('admin/freaks', {user:user, data: results});		
      });	
    
});

router.post('/freaks/ban', function(request, response){
  var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
  response.render('admin/freaks',{user:user});
});

router.get('/agencies', function(request, response){
  var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    userModel.getAllAgencies(function(results){
      response.render('admin/agencies', {user:user, data: results});		
    });
});

router.get('/pendingevents', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
    response.render('admin/pendingevents',{user:user});
});
router.get('/message', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
    response.render('admin/messages',{user:user});
});
router.get('/sendmessage', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
    response.render('admin/sendmessage',{user:user});
});
router.get('/notifications', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
    response.render('admin/notifications',{user:user});
});

  
  module.exports = router;