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
    
    
    
 EventsCount: function(callback){

			var sql = "SELECT COUNT(id) AS NI FROM events";
			db.getResults(sql, [], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
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
    
    
    
    
      insertBooking: function(booking, callback){

		var sql ="insert into booking values('',?,?,?,?,?)";
		db.execute(sql, [booking.eventid,booking.agencyname,booking.bookedby,booking.bookedby_name,booking.date], function(status){
			callback(status);
		});
	},
    
     update: function(user, callback){
		var sql ="update events set person_capacity=?  where id=?";
	
		db.execute(sql, [user.capacity,user.id], function(status){
			callback(status);
		});
	},
    
    
    
    
    AllBookingByemail:function(email,callback){

			var sql = "select * from booking where bookedby=?";
			db.getResults(sql, [email], function(result){
				if(result.length > 0 ){
					callback(result);
				}else{
					callback([]);
				}
			});
	}

    
    
    
    
}



