var express = require('express');
var router = express.Router();

router.get('/', function(request, response){

	
    //console.log(request.cookies['username']);
	//response.clearCookie('user');
   // request.session.useremail=null;
    request.session.user_login="false";
	response.redirect('/login');
});

module.exports = router;