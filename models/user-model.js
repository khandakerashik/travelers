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

	getByemail:function(email, callback){

			var sql = "select * from users where email=?";
			db.getResults(sql, [email], function(result){
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
	getnotifications: function(callback){
		var sql = "SELECT * FROM `events` order by ID DESC ";
		
		db.getResults(sql, [], function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	getpendingevents: function(callback){
		var sql = "select * from pendingevents";
		
		db.getResults(sql, [], function(results){
			
			if(results.length > 0){
				callback(results);
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
	getAllEvents: function(callback){
		var sql = "select * from events";
		
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

		insertAdmins: function(add, callback){

			
			var sql ="insert into admins values('',?,?,?,?,?,?)";
			console.log(sql);
			db.execute(sql, [add.name,add.email,add.phone,add.gender,add.password,add.profile_pic], function(status){
				callback(status);
			});
		},

	update: function(user, callback){
		var sql ="update users set username=?, password=? where id=?";
	
		db.execute(sql, [user.username, user.password, user.id], function(status){
			callback(status);
		});
	},

	updateAdminByEmail: function(add, callback){
		var sql ="update admins set name=?, email=?, phone=?, gender=?, password=?, profile_pic=? where email= ?";
		console.log("adminup"+ add.email);
		db.execute(sql, [add.name, add.email, add.phone,add.gender, add.password ,add.profile_pic, add.email], function(status){
			callback(status);
		});
	},
	updateByEmail: function(add, callback){
		var sql ="update users set name=?, email=?, password=? where email=?";
		console.log(add.email);
		db.execute(sql, [add.name, add.email, add.password, add.email], function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from users where id=?";
		db.execute(sql, [id], function(status){
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
    
alreadyHaveEmail: function(email, callback){
            
			var sql = "select * from users where email = ?";
			db.getResults(sql, [email], function(result){
				if(result.length > 0 ){
					callback(result[0]);
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
	},






//travel_agency

	getAgencyByEmail: function(email, callback){

		var sql = "select * from travel_agencies where email=?";
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
	},
    
    updateAgencies: function(user, callback){
		var sql ="update travel_agencies set name=?, phone=?, password=?, profile_pic=? where email=?";
	
		db.execute(sql, [user.name, user.phone,user.password,user.profile_pic,user.email], function(status){
			callback(status);
		});
	},
    
    updateUsers: function(user, callback){
		var sql ="update users set name=?, password=? where email=?";
	
		db.execute(sql, [user.name,user.password,user.email], function(status){
			callback(status);
		});
	}
     
    
    
    
    
}