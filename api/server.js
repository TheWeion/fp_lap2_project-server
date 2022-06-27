//
// ─── SERVER: CONFIGURATION ──────────────────────────────────────────────────────
//
// SERVER PORT: 127.0.0.1:3000
// CLIENT PORT: 127.0.0.1:8080
//
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user');
const habitRoutes = require('./routes/habit');

//
// ─── GLOBALS ────────────────────────────────────────────────────────────────────
//

const server = express();

// ────────────────────────────────────────────────────────────────────────────────

server.use(cors());
server.use(express.json());

server.use('/users', userRoutes);
server.use('/habits', habitRoutes);

server.get ('/', (_req, res) => res.send('Hello World!'));

module.exports = server;