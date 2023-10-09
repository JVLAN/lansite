const mysql = require('mysql2');
const connection = mysql.createConnection({
	host : 'localhost',
	user : 'naka',
	password : 'chien',
	database : 'db_jvlan'
});

connection.connect()

module.exports = connection