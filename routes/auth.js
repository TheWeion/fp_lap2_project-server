//
// ─── ROUTES: PASSWORD CRYPTOGRAPHY ──────────────────────────────────────────────
//
// DESCRIPTION: Define all password-related functions.
//
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

//
// ─── GLOBALS ────────────────────────────────────────────────────────────────────
//

const router = express.Router();

// ────────────────────────────────────────────────────────────────────────────────

router.post('/register', async (req, res) => {
	try {
		const salt = await bcrypt.genSalt();
		const hash = await bcrypt.hash(req.body.password, salt);
		await User.create({...req.body, password: hash});

		res.status(201).json({ message: 'User created successfully!' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.post('/login', async (req, res) => {
	try {
		const user = await User.getByUsername(req.body.username);
		if(!user) { throw new Error (`${user} not a registered user!`); }

		const isValid = await bcrypt.compare(req.body.password, user.passwordDigest);
		if (!!isValid){
			const payload = { username: user.username, email: user.email, id: user.id };
			const sendToken = (err, token) => {
				if (err) { throw new Error('Error in token generation.')}
				res.status(200).json({
					success: true,
					token: token
				});
			};
			jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }, sendToken);
		} else {
			throw new Error('User could not be authenticated.');
		};
	} catch (err) {
		res.status(401).json({ message: err.message });
	};
});

module.exports = router;