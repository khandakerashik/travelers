var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();


router.get('*', function(request, response, next){

	if(request.cookies['user'] != null){
		next();
	}else{
		response.redirect('/logout');
	}

});
router.get('/', function(request, response){
    //console.log(request.cookies['user']);

	response.render('home/index');
});



module.exports = router;


