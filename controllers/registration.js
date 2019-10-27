var express = require('express');
//var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('registration/index');
});
router.get('/freaks', function(request, response){
    response.render('registration/freaks');
});
router.get('/agency', function(request, response){
    response.render('registration/agency');
});

router.post('/', function(request, response){

    var user = {
            name: request.body.name,
            username: request.body.username,
            password: request.body.password,
            mobile:  request.body.mobile,
            gender:request.body.gender,
            usertype:request.body.usertype
        };
    
    
        userModel.insert(user, function(status){	
            if(status){
                response.redirect("/login");
            }else{
                response.redirect("/registration");	
            }
        });
    });

module.exports = router;