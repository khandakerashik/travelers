var db = require('./db')

module.exports = {

	getAlleventsHome: function(callback){
		var sql = "select * from events LIMIT 6";
		db.getResults(sql, [], function(result){
			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		});
	},    
	    
	getAllevents: function(callback){
		var sql = "select * from events ";
		db.getResults(sql, [], function(result){
			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

	getAlleventByEmail: function(email,callback){
		var sql = "select * from events where postby=?";
		db.getResults(sql, [email], function(result){
			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

	getAlleventByEmailstatus: function(email,callback){
		var sql = "select * from events where postby=? and status='1'";
		db.getResults(sql, [email], function(result){
			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

	getAlleventByEmailzerostatus: function(email,callback){
		var sql = "select * from declined_events where postby=?";
		db.getResults(sql, [email], function(result){
			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

	insertEvents: function(event, callback){
		var sql ="insert into events values('',?,?,?,?,?,?,?,?,?,?,?,?)";
		console.log(sql);
		db.execute(sql, [event.tittle,event.postby,event.agencyname,event.place,event.date,event.duration,event.description,event.person,event.cost,event.image,event.catagory,event.status], function(status){
			callback(status);
		});
	}, 

	insertdeclinedEvents: function(event, callback){
		var sql ="insert into declined_events select * from events where status='0'";
		console.log(sql);
		db.execute(sql, [event.tittle,event.postby,event.agencyname,event.place,event.date,event.duration,event.description,event.person,event.cost,event.image,event.catagory,event.status], function(status){
			callback(status);
		});
	},

	updateEvents: function(event, callback){
		var sql ="update events set title=?, agencyname=?, place=?, date=?, duration=?, description=?, person_capacity=?, cost_per_person=?, image=? where id=?";
	
		db.execute(sql, [event.tittle,event.agencyname,event.place,event.date,event.duration,event.description,event.person,event.cost,event.image,event.id], function(status){
			callback(status);
		});
	},

	deleteEvents: function(event, callback){
		var sql ="update events set status=? where id=?";
	
		db.execute(sql, [event.status,event.id], function(status){
			callback(status);
		});
	},

	deletezeroEvents: function(id, callback){
		var sql = "delete from events where id=? and status=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	},
	    
	EventsCount: function(callback){
		var sql = "SELECT COUNT(id) AS NI FROM events";
		db.getResults(sql, [], function(result){
			if(result.length > 0 ){
				callback(result[0]);
			}
			else{
				callback([]);
			}
		});
	},	    

	getAlleventsByID: function(id,callback){
		var sql = "select * from events where id =?";
		db.getResults(sql, [id], function(result){
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

	getAllBookedevents: function(email,callback){
		var sql = "select * from booking where postbyevent=?";
		db.getResults(sql, [email], function(result){
			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		});
	}

          
}