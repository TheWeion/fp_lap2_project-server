//
// ─── CLASS: HABITS ──────────────────────────────────────────────────────────────
//
// DESCRIPTION: Construct Habit class with properties and methods.
//
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── GLOBALS ────────────────────────────────────────────────────────────────────
//

const db = require('../dbconfig/init');

// ────────────────────────────────────────────────────────────────────────────────

module.exports = class Habit {
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.frequency = data.frequency;
		this.time = data.time;
		this.comment = data.comment;
	};
	
	static get all() {
		return new Promise(async (resolve, reject) => {
			try {
				const habitData = await db.query(`SELECT * FROM habits;`);
				let habits = habitData.rows.map(habit => new Habit(habit));
				resolve(habits);
			} catch (err) {
				reject('Habit not found!');
			};
		});
	};

	static get users() {
		return new Promise(async (resolve, reject) => {
			try {
				const results = await db.query(`SELECT id, username 
												FROM users 
												WHERE habit.id = $1;`, [this.id]);
				let users = new User(results.rows[0]);
				resolve(users);
			} catch (err) {
				reject('User\'s habits could not be be found!');
			};
		});


	};

	static getById(id) {
		return new Promise(async (resolve, reject) => {
			try {
				const habitData = await db.query(`SELECT * FROM habits WHERE id = $1;`, [id]);
				let habit = new Habit(habitData.rows[0]);
				resolve(habit);
			} catch (err) {
				reject('Habit not found!');
			};
		});
	};

	static async create(name, frequency, time, _comment) {
		return new Promise(async (resolve, reject) => {
			try {
				const habitData = await db.query(`INSERT INTO habits (id, name, frequency, time, comment) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [id, name, frequency, time, _comment]);
				let habit = new Habit(habitData.rows[0]);
				resolve(habit);
			} catch (err) {
				reject('Habit not created!');
			};
		});
	};
};