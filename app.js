var express = require('express');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
//var login = require('./controllers/login');
//var logout = require('./controllers/logout');
var registration = require('./controllers/registration');
//var adminpanel = require('./controllers/adminpanel');
var app = express();


//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());
//app.use('/login', login);
//app.use('/logout', logout);
app.use('/registration', registration);
//app.use('/adminpanel', adminpanel);


//ROUTER
app.get('/', function(request, response){
	response.send('Enter a valid URL!');
});

//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});