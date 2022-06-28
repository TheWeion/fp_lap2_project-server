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
		this.isComplete = data.isComplete;
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
				reject('User\'s habits could not be found!');
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

	static async create(name, frequency, time, _comment, isComplete) {
		return new Promise(async (resolve, reject) => {
			try {
				const habitData = await db.query(`INSERT INTO habits (name, frequency, time, comment, isComplete) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [name, frequency, time, _comment, isComplete]);
				let habit = new Habit(habitData.rows[0]);
				resolve(habit);
			} catch (err) {
				reject('Habit not created!');
			};
		});
	};

	static async update(name, frequency, time, _comment, isComplete) {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await db.query(`UPDATE habits 
													SET name = $2, frequency = $3, time = $4, comment = $5 isComplete = $6 	
													WHERE id = $1 
													RETURNING *;`, [name, frequency, time, _comment, isComplete]);
				let habit = new Habit(result.rows[0]);
				resolve(habit);
			} catch (err) {
				reject('Habit could not be updated!');
			};
		});
	};

	destroy() {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await db.query(`DELETE FROM habits WHERE id = $1 RETURNING id;`, [this.id]);
				resolve(`Habit ${result.rows[0].id} deleted!`);
			} catch (err) {
				reject('Habit could not be deleted!');
			};
		});
	};
};
