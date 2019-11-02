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
	response.render('blog/index',user);
});

module.exports = router;


