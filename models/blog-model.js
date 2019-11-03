var db = require('./db')

module.exports = {

getAllblogHome: function(callback){

			var sql = "select * from blog LIMIT 6";
			db.getResults(sql, [], function(result){
				if(result.length > 0 ){
					callback(result);
				}else{
					callback([]);
				}
			});
	},
    
    
getAllblog: function(callback){

			var sql = "select * from blog ";
			db.getResults(sql, [], function(result){
				if(result.length > 0 ){
					callback(result);
				}else{
					callback([]);
				}
			});
	},
    
    
    
 blogCount: function(callback){

			var sql = "SELECT COUNT(id) AS NI FROM blog";
			db.getResults(sql, [], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},    
    

   getAllblogByID: function(id,callback){

			var sql = "select * from blog where id =?";
			db.getResults(sql, [id], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	}
    

    
    
    
    
}



