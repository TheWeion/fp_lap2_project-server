//
// ─── CLASS: USERS ───────────────────────────────────────────────────────────────
//
// DESCRIPTION: Construct User class with properties and methods.
//
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const db = require('../dbConfig/init');
const Habit = require('./habit');

// ────────────────────────────────────────────────────────────────────────────────

module.exports = class User{
	constructor(data) {
		this.id = data.id;
		this.username = data.username;
		this.passwordDigest = data.password_digest;
		this.email = data.email;
		this.createdAt = data.created_at;
	};
	
	static get all(){
		return new Promise (async (resolve, reject) => {
			try {
				const userData = await db.query(`SELECT * FROM users;`);
				let users = userData.rows.map(user => new User(user));
				resolve(users);
			} catch (err) {
				reject('User not found!');
			};
		});
	};

	static getById(id){
		return new Promise (async (resolve, reject) => {
			try {
				const userData = await db.query(`SELECT users.*, habits.name 
														FROM users 
														JOIN habits
														ON habits.user_id = users.id
														WHERE users.id = $1;`, [id]);

				let user = new User(userData.rows[0]);
				resolve(user);
			} catch (err) {
				reject('User not found!');
			};
		});
	};

	static getByUsername(id){
		return new Promise (async (resolve, reject) => {
			try {
				const userData = await db.query(`SELECT * FROM users WHERE username = $1;`, [id]);
				let user = new User(userData.rows[0]);
				resolve(user);
			} catch (err) {
				reject('User not found!');
			};
		});
	};

	static async create({ username, email, password }){
		return new Promise (async (resolve, reject) => {
			try {
				const userData = await db.query(`INSERT INTO users (username, email, password_digest) VALUES ($1, $2, $3) RETURNING *;`, [username, email, password]);
				let user = new User(userData.rows[0]);
				resolve(user);
			} catch (err) {
				reject('User not created!');
			};
		});
	};

	destroy(){
		return new Promise (async (resolve, reject) => {
			try {
				const userData = await db.query(`DELETE FROM users WHERE id = $1;`, [this.id]);
				resolve('User deleted!');
			} catch (err) {
				reject('User not deleted!');
			};
		});
	};
};
