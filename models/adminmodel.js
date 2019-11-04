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
        updateAdminByEmail: function(add, callback){
            var sql ="update admins set name=?, email=?, phone=?, gender=?, password=?, profile_pic=? where email=add.email";
        
            db.execute(sql, [add.name, add.email, add.phone,add.gender, add.password ,add.profile_pic], function(status){
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

        getByemailFraaks:function(email, callback){

                var sql = "select * from freaks where email=?";
                db.getResults(sql, [email], function(result){
                    if(result.length > 0 ){
                        callback(result[0]);
                    }else{
                        callback([]);
                    }
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
        }
}