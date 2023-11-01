const mysql = require('mysql2');
const connection = mysql.createPool({
	host : 'localhost',
	user : 'naka',
	password : 'chien',
	database : 'db_jvlan'
});

module.exports = connection