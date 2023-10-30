
const mysql = require('mysql2');
let connection = require('./db_config.js'); // Assurez-vous d'inclure le chemin correct

class User {
  constructor(row) {
	this.row = row;
  }

  get id() {
	return this.row.id;
  }

  get login() {
	return this.row.login;
  }

  get points() {
	return this.row.points;
  }

  get isAdmin() {
	return this.row.isAdmin;
  }

static createUser(login, admin, cb) {
	const query = 'INSERT INTO T_Users (login, IsAdmin) VALUES (?, ?)';
	const values = [login, admin];

	connection.query(query, values, (err, result) => {
		if (err) {
			if (err.code === 'ER_DUP_ENTRY') {
			cb('Le login existe déjà', null);
		} else {
			cb(err, null);
		}
		return;
	}
	cb(null, result.insertId); // Retourne l'ID du nouvel utilisateur
});
}

  static getAllUsersSortedByPoints(cb) {
	const query = "SELECT * FROM T_Users ORDER BY points DESC"

	connection.query(query, (err, results) => {
		if (err)
		{
			cb(err, null)
		} else {
			cb(null, results)
		}
	});
  }
}

module.exports = User;
