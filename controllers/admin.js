var express = require('express');
//var userModel = require('./../models/user-model');
var adminModel = require('./../models/adminmodel');
var router = express.Router();
var JSAlert = require("js-alert");

router.get('*', (req, res, next) => {
  if (req.session.user_login != null) {
      next();
  } else {
      res.redirect('/');
  }
});

router.get('/', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
      adminModel.totaluser(function(result){
        adminModel.totalmessage(function(result2){
          adminModel.totalfreaks(function(result3){
            adminModel.totalagencies(function(result4){
              adminModel.totalblogs(function(result5){
                adminModel.totalevents(function(result6){
        response.render('admin/index',{user:user,result,result2,result3,result4,result5,result6});
                });
              });
            });
          });
        });
    });
});

router.get('/index', function(request, response){
  var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    adminModel.totaluser(function(result){
      adminModel.totalmessage(function(result2){
        adminModel.totalfreaks(function(result3){
          adminModel.totalagencies(function(result4){
            adminModel.totalagencies(function(result5){
              adminModel.totalagencies(function(result6){
      response.render('admin/index',{user:user,result,result2,result3,result4,result5,result6});
              });
            });
          });
        });
      });
  });
});

router.get('/profile', function(request, response){
    var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
      
        adminModel.getAdminByEmail(request.session.data.email, function(result){
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
  
    adminModel.getAdminByEmail(request.session.data.email, function(result){
      response.render('admin/edit_profile',{user:user,data:result});
      
    });
});

router.post('/editprofile', function(request, response){
  var add = {
    name: request.body.inputName,
    email: request.session.data.email,
    phone: request.body.inputPhone,
    gender: "male",
    password:request.body.inputPassword,
    profile_pic:"/abc/",
  };

  adminModel.updateAdminByEmail(add, function(status){	
    if(status)
    {
        adminModel.updateByEmail(add, function(status){	
       if(status){
         console.log("update successful");
         
         response.redirect("/admin/editprofile");
      }else{
        console.log("Update Failed!");
         response.redirect("/admin/editprofile");	
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

      adminModel.insertAdmins(add, function(status){	
        if(status)
        {
            adminModel.insert(user, function(status){	
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
  // adminModel.joinfreakuser(function(result){	
  //   if(result){
  //     response.render("/admin/freaks",{join:result});
  //  }else{
  //     response.render("/admin/freaks");	
  //       }
  //    });
     
     var user ={
        name:request.session.data.name,
        email:request.session.data.email,
        user_type:request.session.data.user_type,
        login:request.session.user_login
          
      };
      adminModel.getAllFreaks(function(results){
        response.render('admin/freaks', {user:user, data: results});		
      });	
    
});

router.get('/freaks/ban/:id', function(request, response){
  var user = {
    id: request.params.id,
    status:"0",
  };

  adminModel.banfreak(user, function(status){	
       if(status){
         response.redirect("/admin/freaks");
      }else{
         response.redirect("/admin/freaks");	
           }
        });
});
router.get('/freaks/delete/:id', function(request, response){
  var user = {
    id: request.params.id,
  };
  adminModel.joinfreakuser(function(status){	
    if(status){
      response.redirect("/admin/freaks");
   }else{
      response.redirect("/admin/freaks");	
        }
     });

  adminModel.delete(user, function(status){	
    if(status)
        {
          adminModel.deletefreaks(user, function(status){	
        if(status){
          response.redirect("/admin/freaks");
        }else{
          response.redirect("/admin/freaks");	
            }
          });

         } 
     });
    
  });

router.get('/agencies', function(request, response){
  var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    adminModel.getAllAgencies(function(results){
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
  adminModel.getpendingevents(function(results){
    response.render('admin/pendingevents', {user:user, data: results});		
  });
});
router.get('/message', function(request, response){
  var user ={
      name:request.session.data.name,
      email:request.session.data.email,
      user_type:request.session.data.user_type,
      login:request.session.user_login
        
    };
    adminModel.messages(function(results){
      response.render('admin/messages', {user:user, data: results});		
    });
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
router.post('/sendmessage', function(request, response){
  var user ={
      reciever:request.body.reciever,
      sender:"admin@travelers.com",
      message:request.body.message,
      sender:"admin@travelers.com",
      status:"0",
      login:request.session.user_login,
    };
    adminModel.sendmessage(user, function(status){	
      if(status){
        response.redirect("/admin/message");
     }else{
       console.log("insert Failed!");
        response.redirect("/admin/");	
          }
       });
});
router.get('/pendingevents/approve/:id', function(request, response){
  var user = {
    id: request.params.id,
    status:"1",
  };

  adminModel.approveevent(user, function(status){	
       if(status){

         response.redirect("/admin/pendingevents");
      }else{
        console.log("insert Failed!");
         response.redirect("/admin/pendingevents");	
           }
        });
    
  });

  router.get('/pendingevents/delete/:id', function(request, response){
    var user = {
      id: request.params.id,
    };
  
    adminModel.deleteevent(user, function(status){	
         if(status){
           console.log("delete successful");
           response.redirect("/admin/pendingevents");
        }else{
          console.log("insert Failed!");
           response.redirect("/admin/pendingevents");
             }
          });
      
    });

    router.get('/message/read/:id', function(request, response){
      var user = {
        id: request.params.id,
      };
    
      adminModel.messageread(user, function(status){	
           if(status){
    
             response.redirect("/admin/message");
          }else{
            console.log("insert Failed!");
             response.redirect("/admin/message");	
               }
            });
        
      });
  
      router.get('/message/reply/:id', function(request, response){
        var user ={
            name:request.session.data.name,
            email:request.session.data.email,
            user_type:request.session.data.user_type,
            login:request.session.user_login,
            id:request.params.id,
          };
          adminModel.getMessageById(user,function(results){
            response.render('admin/reply', {user:user, data: results});		
          });
    });

    router.post('/message/reply/:id', function(request, response){
      var user ={
          reciever:request.body.reciever,
          sender:"admin@travelers.com",
          message:request.body.message,
          sender:"admin@travelers.com",
          status:"0",
          login:request.session.user_login,
        };
        adminModel.sendmessage(user, function(status){	
          if(status){
            response.redirect("/admin/message");
         }else{
           console.log("insert Failed!");
            response.redirect("/admin/");	
              }
           });
  });


router.get('/notifications', function(request, response){
  var user ={
    name:request.session.data.name,
    email:request.session.data.email,
    user_type:request.session.data.user_type,
    login:request.session.user_login
      
  };
  adminModel.getnotifications(function(results){
    response.render('admin/notifications', {user:user, data: results});		
  });
});


  
  module.exports = router;