var db = require('./db')

module.exports = {

	getById: function(id, callback){

			var sql = "select * from users where id=?";
			db.getResults(sql, [id], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},
	getByemail:function(username, callback){

			var sql = "select * from users where email=?";
			db.getResults(sql, [username], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},
	validate: function(user, callback){
		var sql ="select * from users where email=? and password=?";
		db.getResults(sql, [user.inputEmail, user.inputPassword], function(result){

			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});	
	},
	getAll: function(callback){
		var sql = "select * from users";
		
		db.getResults(sql, [], function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	insert: function(user, callback){

		var sql ="insert into users values('',?,?,?,?)";
		db.execute(sql, [user.email,user.password,user.type,user.status], function(status){
			callback(status);
		});
	},

	insertFreaks: function(user, callback){

			
			var sql ="insert into freaks values('',?,?,?,?,?,?)";
			console.log(sql);
			db.execute(sql, [user.name,user.email,user.phone,user.gender,user.password,user.profile_pic], function(status){
				callback(status);
			});
		},

	insertTravel_agencies: function(user, callback){

			
			var sql ="insert into travel_agencies values('',?,?,?,?,?,?,?)";
			console.log(sql);
			db.execute(sql, [user.name,user.agencies,user.email,user.phone,user.gender,user.password,user.profile_pic], function(status){
				callback(status);
			});
		},

	update: function(user, callback){
		var sql ="update users set username=?, password=? where id=?";
	
		db.execute(sql, [user.username, user.password, user.id], function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from users where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	},
    
alreadyHaveEmail: function(email, callback){
            
			var sql = "select * from users where email = ?";
			db.getResults(sql, [email], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
    
        
	}
    
    
}



