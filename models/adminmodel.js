var db = require('./db')

module.exports = {
    getAdminByEmail: function(email, callback){

		var sql = "select * from admins where email=?";
		db.getResults(sql, [email], function(result){
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
        },
        getAllFreaks: function(callback){
            var sql = "select * from freaks";
            
            db.getResults(sql, [], function(results){
                
                if(results.length > 0){
                    callback(results);
                }else{
                    callback([]);
                }
            });	
        },
        messages: function(callback){
            var sql = "select * from admin_message where reciever= 'admin@travelers.com' and read_status=0 ";
            
            db.getResults(sql, [], function(results){
                
                if(results.length > 0){
                    callback(results);
                }else{
                    callback([]);
                }
            });	
        },
        getMessageById: function(user,callback){
            var sql = "select * from admin_message where id=? ";
            
            db.getResults(sql, [user.id], function(results){
                
                if(results.length > 0){
                    console.log(results.message);
                    callback(results);
                }else{
                    callback([]);
                }
            });	
        },
        delete: function(user, callback){
            var sql = "delete from users where id=?";
            db.execute(sql, [user.id], function(status){
                callback(status);
            });
        },
        joinfreakuser: function(callback){
            var sql="SELECT u.id, f.id FROM users u INNER JOIN freaks f ON u.email = f.email";
            db.execute(sql, [], function(status){
                callback(status);
            });
        },
        deletefreaks: function(user, callback){
            //var sql2="SELECT u.id, f.id FROM users u INNER JOIN freaks f ON u.email = f.email";
            var sql = "delete from freaks where id=?";
            db.execute(sql, [user.id], function(status){
                callback(status);
            });
        },
        totaluser:function(callback){

            var sql = "SELECT COUNT(id) AS id FROM users";
            db.getResults(sql,[], function(result){
                if(result.length > 0 ){
                    callback(result[0]);
                    console.log(result);
                }else{
                    callback([]);
                }
            });
             },
             totalmessage:function(callback){

                var sql = "select COUNT(id) AS id from admin_message where reciever= 'admin@travelers.com'";
                db.getResults(sql,[], function(result2){
                    if(result2.length > 0 ){
                        callback(result2[0]);
                    }else{
                        callback([]);
                    }
                });
                 },
                 totalfreaks:function(callback){

                    var sql = "SELECT COUNT(id) AS id FROM users where user_type= 'freaks'";
                    db.getResults(sql,[], function(result3){
                        if(result3.length > 0 ){
                            callback(result3[0]);
                        }else{
                            callback([]);
                        }
                    });
                     },
                     totalagencies:function(callback){

                        var sql = "SELECT COUNT(id) AS id FROM users where user_type= 'agencies'";
                        db.getResults(sql,[], function(result4){
                            if(result4.length > 0 ){
                                callback(result4[0]);
                            }else{
                                callback([]);
                            }
                        });
                         },
                         totalblogs:function(callback){

                            var sql = "SELECT COUNT(id) AS id FROM blog";
                            db.getResults(sql,[], function(result5){
                                if(result5.length > 0 ){
                                    callback(result5[0]);
                                }else{
                                    callback([]);
                                }
                            });
                             },
                             totalevents:function(callback){

                                var sql = "SELECT COUNT(id) AS id FROM events where status=1";
                                db.getResults(sql,[], function(result6){
                                    if(result6.length > 0 ){
                                        callback(result6[0]);
                                    }else{
                                        callback([]);
                                    }
                                });
                                 },
        getAllAgencies: function(callback){
            var sql = "select * from travel_agencies";
            
            db.getResults(sql, [], function(results){
                
                if(results.length > 0){
                    callback(results);
                }else{
                    callback([]);
                }
            });	
        },
        insert: function(user, callback){

            var sql ="insert into users values('',?,?,?,?,?)";
            db.execute(sql, [user.name,user.email,user.password,user.type,user.status], function(status){
                callback(status);
            });
        },

        insertAdmins: function(add, callback){

			
			var sql ="insert into admins values('',?,?,?,?,?,?)";
			console.log(sql);
			db.execute(sql, [add.name,add.email,add.phone,add.gender,add.password,add.profile_pic], function(status){
				callback(status);
			});
        },

        sendmessage: function(user, callback){

			
			var sql ="insert into admin_message values('',?,?,?,?)";
			console.log(sql);
			db.execute(sql, [user.sender,user.reciever,user.message,user.status], function(status){
				callback(status);
			});
        },
        
        totaluser:function(callback){

            var sql = "SELECT COUNT(id) AS id FROM users";
            db.getResults(sql,[], function(result){
                if(result.length > 0 ){
                    callback(result[0]);
                    console.log(result);
                }else{
                    callback([]);
                }
            });
    },

        getnotifications: function(callback){
            var sql = "SELECT * FROM `events` where status=0 order by ID DESC ";
            
            db.getResults(sql, [], function(results){
                
                if(results.length > 0){
                    callback(results);
                }else{
                    callback([]);
                }
            });	
        },
        getpendingevents: function(callback){
            var sql = "select * from events where status=0";
            
            db.getResults(sql, [], function(results){
                
                if(results.length > 0){
                    callback(results);
                }else{
                    callback([]);
                }
            });	
        },
        getAllAgencies: function(callback){
            var sql = "select * from travel_agencies";
            
            db.getResults(sql, [], function(results){
                
                if(results.length > 0){
                    callback(results);
                }else{
                    callback([]);
                }
            });	
        },
        updateAdminByEmail: function(add, callback){
            var sql ="update admins set name=?, email=?, phone=?, gender=?, password=?, profile_pic=? where email= ?";
            console.log("adminupdsfd>"+ add.email);
            db.execute(sql, [add.name, add.email, add.phone,add.gender, add.password ,add.profile_pic, add.email], function(status){
                callback(status);
            });
        },
        updateByEmail: function(add, callback){
            var sql ="update users set name=?, password=? where email= ?";
            console.log("user update :"+ add.email);
            db.execute(sql, [add.name,add.password, add.email], function(status){
                callback(status);
            });
        },
        deleteevent: function(user, callback){
            console.log(user.id);
            var sql ="delete from events where id=?";
        
            db.execute(sql, [user.id], function(status){
                callback(status);
            });
        },
        approveevent: function(user, callback){
            var sql ="update events set status = 1 where id= ?";
        
            db.execute(sql, [user.id], function(status){
                callback(status);
            });
        },
        messageread: function(user, callback){
            var sql ="update admin_message set read_status = 1 where id= ?";
        
            db.execute(sql, [user.id], function(status){
                callback(status);
            });
        },
        banfreak: function(user, callback){
            var sql ="update users set active_status = 0 where id= ?";
        
            db.execute(sql, [user.id], function(status){
                callback(status);
            });
        },
    
        update: function(user, callback){
            var sql ="update users set username=?, password=? where id=?";
        
            db.execute(sql, [user.username, user.password, user.id], function(status){
                callback(status);
            });
        },
        insertAdmins: function(add, callback){

			
			var sql ="insert into admins values('',?,?,?,?,?,?)";
			console.log(sql);
			db.execute(sql, [add.name,add.email,add.phone,add.gender,add.password,add.profile_pic], function(status){
				callback(status);
			});
		},
        getByemailAgencies:function(email, callback){

            var sql = "select * from travel_agencies where email=?";
            db.getResults(sql, [email], function(result){
                if(result.length > 0 ){
                    callback(result[0]);
                }else{
                    callback([]);
                }
            });
        },
}