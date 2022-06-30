//
// ─── CONTROLLERS: HABITS ────────────────────────────────────────────────────────
//
// DESCRIPTION: Define all habit-related functions.
//
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── GLOBALS ────────────────────────────────────────────────────────────────────
//

const Habit = require('../models/habit');

// ────────────────────────────────────────────────────────────────────────────────

async function index (_req, res) {
	try {
		const habits = await Habit.all;
		res.status(200).json(habits);
	} catch (err) {
		res.status(500).json({ message: err.message });
	};
};

async function show(req, res) {
	try {
		const habits = await Habit.getById(req.params.id);
		res.status(200).json(habits);
	} catch (err) {
		res.status(500).json({ message: err.message });
	};
};

async function create(req, res) {
	try {
		const habits = await Habit.create(req.body);
		res.status(201).send();
	} catch (err) {
		res.status(422).json({ message: err.message });
	};
};

async function update(req, res) {
	try {
		const habits = await Habit.getById(req.params.id);
		const habitUpdated = await habits.update(req.body);
		const users = await habits.users;
		res.status(200).json( ...habitUpdated, users );
	} catch (err) {
		res.status(500).json({ message: err.message });
	};
};

async function destroy(req, res) {
	try {
		const habits = await Habit.getById(req.params.id);
		const resp = await habits.destroy();
		res.status(204).end(resp);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy
};
