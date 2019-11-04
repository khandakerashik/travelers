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
	},
    
      getAllblogByEmail: function(email,callback){

			var sql = "select * from blog where postby =?";
			db.getResults(sql, [email], function(result){
				if(result.length > 0 ){
					callback(result);
				}else{
					callback([]);
				}
			});
	},
    
    
    
    
    
    
    insertBlog: function(blog, callback){

		var sql ="insert into blog values('',?,?,?,?,?,?,?,?)";
		db.execute(sql, [blog.title,blog.description,blog.location,blog.image,blog.date,blog.postby,blog.name,blog.catagory], function(status){
			callback(status);
		});
	},
    
    
    updateBlog: function(blog, callback){
		var sql ="update blog set title=?,location=? ,description=?,image=? where id=?";
	
		db.execute(sql, [blog.title,blog.location,blog.description,blog.image,blog.id], function(status){
			callback(status);
		});
	},
    
    
    
    
delete: function(id, callback){
		var sql = "delete from blog where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}
    
    
    
    
}



