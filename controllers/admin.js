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
    response.render('admin/index',user);
});

router.get('/index', function(request, response){
  var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
  response.render('admin/index',user);
});


router.get('/profile', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
    response.render('admin/profile',user);
});
router.get('/editprofile', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
      response.render('admin/edit_profile',user);
});
router.get('/addadmin', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
    response.render('admin/addadmin',user);
});
router.get('/freaks', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
    response.render('admin/freaks',user);
});

router.get('/agencies', function(request, response){
  var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
  response.render('admin/agencies',user);
});

router.get('/pendingevents', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
    response.render('admin/pendingevents',user);
});
router.get('/message', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
    response.render('admin/messages',user);
});
router.get('/sendmessage', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
    response.render('admin/sendmessage',user);
});
router.get('/notifications', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
    response.render('admin/notifications',user);
});


module.exports = router;


