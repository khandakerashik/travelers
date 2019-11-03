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
	}
    

    
    
    
    
}



