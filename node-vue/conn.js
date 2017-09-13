const mysql = require('mysql');
const conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	
	database:'my_db',
	port:'3306'
});

module.exports = conn;