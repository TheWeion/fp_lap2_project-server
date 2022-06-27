//
// ─── CONTOLLERS: USERS ──────────────────────────────────────────────────────────
//
// DESCRIPTION: Define all user-related functions.
//
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const User = require('./models/user');

// ────────────────────────────────────────────────────────────────────────────────

async function index(_req, res) {
	try {
		const users = await User.all;
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	};
};

async function show(req, res) {
	try {
		const user = await User.getById(req.params.id);
		res.status(200).json(user);
	} catch (err) {
		res.status(404).json({ message: err.message });
	};
};

async function create(req, res) {
	try {
		const user = await User.create(req.body);
		res.status(201).json(user);
	} catch (err) {
		res.status(422).json({ message: err.message });
	};
};

async function destroy(req, res) {
	try {
		const user = await User.getById(req.params.id);
		const resp = await user.destroy();
		res.status(204).end(resp);
	} catch (err) {
		res.status(404).json({ message: err.message });
	};
};

module.exports = {
	index,
	show,
	create,
	destroy
};