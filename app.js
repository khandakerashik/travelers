//DECLARATION
var express = require('express');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var login = require('./controllers/login');
var logout= require('./controllers/logout');
var registration = require('./controllers/registration');
var home = require('./controllers/home');
var admin = require('./controllers/admin');
var exValidator = require('express-validator');


var app = express();


//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(exValidator());
app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());
app.use('/abc', express.static('assets'));
app.use('/login', login);
app.use('/registration', registration);
app.use('/',login);                   //index page ==>request bypass to login page
app.use('/home',home);
app.use('/logout',logout);
app.use('/admin', admin);


//ROUTER



//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});